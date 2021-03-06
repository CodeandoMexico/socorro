// ================== GENERATE PAGE ================== //
const searchBtn = document.getElementById("search-btn");
const selector = document.getElementById("mp-comisiones__selector");
let state;

selector.addEventListener("change", e => {
	selectorFunction(e);
	state = e.target.value;
});

searchBtn.addEventListener("click", async function(e) {
	deleteTables();
	deleteMap();
	includes = [
		{
			// El primero es como se llama en airtable y el segundo como se desplegará
			columnNames: [
				// ["num_estado", "#"],
				["fiscalia", "Fiscalía"],
				["nombre_estado", "Estado"],
				["telefono_fiscalia", "Teléfono"],
				["maps_fiscalia", "Dirección"]
			],
			url: "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Fiscalias-for-consume?sort%5B0%5D%5Bfield%5D=num_estado",
			state: state,
			tableName: "mp",
			title: "Fiscalías",
			mapProperties: {
				color: "#DD4A48",
				entityName: "Fiscalía",
				entityTableName: "fiscalia"
			}
		},
		{
			// El primero es como se llama en airtable y el segundo como se desplegará
			columnNames: [
				// ["num_estado", "#"],
				["comision", "Comisión"],
				["nombre_estado", "Estado"],
				["telefono_comision", "Teléfono"],
				["maps_comision", "Dirección"]
			],
			url: "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Comisiones-for-consume?sort%5B0%5D%5Bfield%5D=num_estado",
			state: state,
			tableName: "comisiones",
			title: "Comisiones",
			mapProperties: {
				color: "#03045E",
				entityName: "Comisión",
				entityTableName: "comision"
			}
		}
	];
	this.style.opacity = "0.5";
	this.style.pointerEvents = "none";
	generatePage(includes);
});
