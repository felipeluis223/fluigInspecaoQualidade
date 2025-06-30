function createDataset(fields, constraints, sortFields) {
	var ds = DatasetBuilder.newDataset();
	
	ds.addColumn("id");
	ds.addColumn("etapa");
	ds.addColumn("data");
	
    // Adiciona registros simulados
    ds.addRow(["1001", "Corte", "2025-06-21"]);
    ds.addRow(["1002", "Serraria", "2025-06-22"]);
    ds.addRow(["1003", "Secagem", "2025-06-23"]);
    ds.addRow(["1004", "Análise", "2025-06-24"]);
    ds.addRow(["1005", "Corte", "2025-06-25"]);
    ds.addRow(["1006", "Serraria", "2025-06-26"]);
    ds.addRow(["1007", "Secagem", "2025-06-27"]);
    ds.addRow(["1008", "Análise", "2025-06-28"]);
    ds.addRow(["1009", "Corte", "2025-06-29"]);
    ds.addRow(["1010", "Serraria", "2025-06-30"]);
    
    return ds;
	
}