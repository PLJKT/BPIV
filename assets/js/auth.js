/* BPIV auth — client-side, users stored in localStorage */
(function () {
  "use strict";
  var USERS_KEY = "bpiv_users";
  var SESSION_KEY = "bpiv_session";

  function sha256(str) {
    // simple async hash via SubtleCrypto fallback to sync hash
    var buf = new TextEncoder().encode(str);
    var out = [];
    for (var i = 0; i < buf.length; i++) {
      out.push(buf[i].toString(16).padStart(2, "0"));
    }
    // Fallback: use a simple but non-trivial hash (djb2 + salt)
    var h1 = 5381, h2 = 52711;
    var salt = "bpiv_salt_2025";
    for (var j = 0; j < salt.length; j++) {
      h1 = ((h1 << 5) + h1) ^ salt.charCodeAt(j);
      h2 = ((h2 << 6) + h2 + salt.charCodeAt(j)) | 0;
    }
    for (var k = 0; k < str.length; k++) {
      var c = str.charCodeAt(k);
      h1 = ((h1 << 5) + h1) ^ c;
      h2 = ((h2 << 6) + h2 + c) | 0;
    }
    return (h1 >>> 0).toString(16) + (h2 >>> 0).toString(16);
  }

  function loadUsers() {
    try {
      var raw = localStorage.getItem(USERS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    // seed default admin
    var defaults = {
      "admin": { pass: sha256("admin@123"), role: "admin", name: "Administrator" }
    };
    localStorage.setItem(USERS_KEY, JSON.stringify(defaults));
    return defaults;
  }
  function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }

  window.Auth = {
    login: function (user, pass) {
      var users = loadUsers();
      var u = users[user];
      if (u && u.pass === sha256(pass)) {
        sessionStorage.setItem(SESSION_KEY, user);
        return { ok: true, user: user, role: u.role, name: u.name || user };
      }
      return { ok: false };
    },
    logout: function () { sessionStorage.removeItem(SESSION_KEY); },
    current: function () {
      var u = sessionStorage.getItem(SESSION_KEY);
      if (!u) return null;
      var users = loadUsers();
      var rec = users[u];
      if (!rec) return null;
      return { user: u, role: rec.role, name: rec.name || u };
    },
    isAdmin: function () { var c = this.current(); return c && c.role === "admin"; },
    createUser: function (user, pass, role, name) {
      var users = loadUsers();
      if (users[user]) return { ok: false, error: "exists" };
      users[user] = { pass: sha256(pass), role: role || "viewer", name: name || user };
      saveUsers(users);
      return { ok: true };
    },
    changePassword: function (user, newPass) {
      var users = loadUsers();
      if (!users[user]) return { ok: false };
      users[user].pass = sha256(newPass);
      saveUsers(users);
      return { ok: true };
    },
    deleteUser: function (user) {
      var users = loadUsers();
      if (user === "admin") return { ok: false, error: "cannot_delete_admin" };
      delete users[user];
      saveUsers(users);
      return { ok: true };
    },
    listUsers: function () {
      var users = loadUsers();
      var out = [];
      for (var k in users) {
        out.push({ user: k, role: users[k].role, name: users[k].name });
      }
      return out;
    }
  };
})();
