const dataTable = new simpleDatatables.DataTable("#datatable", {
	searchable: true,
	fixedHeight: true,
    data : {
        headings : ["Vedio Title","Published Date","Views Count"],

    }
})

dataTable.insert(
    {data:
        [
        ["column1", "12-05-2024", "Ranjit", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "Ranjit", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "Ranjit", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
            
        ]
    }
)

