# -*- coding: utf-8 -*-
import io, sys
p = r"D:\Box Backup\Active Projects\BPIV\information-system\assets\js\auth.js"
s = io.open(p, encoding="utf-8").read()
old = """  function loadUsers() {
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
  }"""
new = """  function loadUsers() {
    var users = {};
    try {
      var raw = localStorage.getItem(USERS_KEY);
      if (raw) users = JSON.parse(raw);
    } catch (e) {}
    // Built-in seed accounts (available on every device, since user data
    // lives in each browser's localStorage and does not sync across devices).
    var defaults = {
      "admin": { pass: sha256("admin@123"), role: "admin", name: "Administrator" },
      "finance": { pass: sha256("finance@1234"), role: "viewer", name: "Finance" }
    };
    for (var k in defaults) {
      if (!users[k]) users[k] = defaults[k];
    }
    return users;
  }"""
n = s.count(old)
print("match count:", n)
if n != 1:
    sys.exit(1)
s = s.replace(old, new)
io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("auth.js patched")
