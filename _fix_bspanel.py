f = r'H:\Box Backup\Active Projects\BPIV\information-system\assets\js\app.js'
with open(f, 'r', encoding='utf-8') as fh:
    lines = fh.readlines()

# Find bsPanel start and end
start = None
end = None
for i, line in enumerate(lines):
    if 'function bsPanel(c)' in line:
        start = i
    if start is not None and i > start and line.strip() == '}' and lines[i-1].strip() == 'return h;':
        end = i
        break

print(f"Replacing lines {start+1} to {end+1}")

bs_func = '''  function bsPanel(c) {
    if (!c.bsDetail) return "";
    var h = '<div class="panel"><h3>' + t("company.bsTitle") + '</h3><table class="data"><tbody>';
    c.bsDetail.forEach(function (item) {
      if (item.section) {
        h += '<tr class="section-row"><td colspan="2"><strong>' + t("company.bsSection." + item.section) + '</strong></td></tr>';
      } else {
        var cls = item.total ? ' class="total-row"' : (item.subtotal ? ' class="subtotal-row"' : '');
        h += '<tr' + cls + '><td>' + item.label + '</td><td class="num">' + fmtIDR(item.amount) + '</td></tr>';
      }
    });
    h += '</tbody></table></div>';
    if (c.isDetail) {
      h += '<div class="panel"><h3>' + t("company.isTitle") + '</h3><table class="data"><tbody>';
      c.isDetail.forEach(function (item) {
        if (item.section) {
          h += '<tr class="section-row"><td colspan="2"><strong>' + t("company.isSection." + item.section) + '</strong></td></tr>';
        } else {
          var cls = item.total ? ' class="total-row"' : (item.subtotal ? ' class="subtotal-row"' : '');
          h += '<tr' + cls + '><td>' + item.label + '</td><td class="num">' + fmtIDR(item.amount) + '</td></tr>';
        }
      });
      h += '</tbody></table></div>';
    }
    return h;
  }
'''

new_lines = lines[:start] + [bs_func] + lines[end+1:]
with open(f, 'w', encoding='utf-8', newline='') as fh:
    fh.writelines(new_lines)
print("Done")
