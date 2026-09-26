# -*- coding: utf-8 -*-
import io
p = r"D:\Box Backup\Active Projects\BPIV\information-system\index.html"
s = io.open(p, encoding="utf-8").read()
n = s.count("?v=32")
print("v32 refs:", n)
s = s.replace("?v=32", "?v=33")
io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("bumped to v33")
