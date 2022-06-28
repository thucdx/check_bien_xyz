console.log("id, is_omni");

rows = $("tr");

res = [];

for (i = 0; i < rows.length; ++i) {
    row = rows[i];
    id = $($(row).find("td.sign_id")[0]).text();
    if (id) {
        is_omni = $($(row).find("td.is_omni input")[0]).is(":checked");
        res.push([id, is_omni].toString());
    }
}
console.log(res.join("\n"));