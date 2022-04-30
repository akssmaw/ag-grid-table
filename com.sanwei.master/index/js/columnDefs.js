
// 时间算法
const filterParamsTime = {
				defaultOption: 'inRange',
				// provide comparator function
				comparator: (filterLocalDateAtMidnight, cellValue) => {
					const dateAsString = cellValue;

					if (dateAsString == null) {
						return 0;
					}

					// In the example application, dates are stored as dd/mm/yyyy
					// We create a Date object for comparison against the filter date
					const dateParts = dateAsString.split('/');
					const day = Number(dateParts[2]);

					const month = Number(dateParts[1]) - 1;
					const year = Number(dateParts[0]);
					const cellDate = new Date(year, month, day);

				 //        	console.log(Date.parse(new Date(cellValue)))
					// console.log("选择的时间戳"+filterLocalDate.getTime())
					filterLocalDateAtMidnight = new Date(filterLocalDateAtMidnight);
					// you need to handle the Z appended to the end of the cellValue string,
					// otherwise you will get the incorrect date you're expecting
					cellValue = new Date(cellValue);
					let filterBy = new Date(filterLocalDateAtMidnight);
					let filterMe = new Date(cellValue);

					// console.log(new Date(filterBy), new Date(filterMe));

					// Now that both parameters are Date objects, we can compare
					if (filterMe < filterBy) {
						return -1;
					} else if (new Date(filterMe) > new Date(filterBy)) {
						return 1;
					}
					return 0;
				}
			};
			
			
			
			// 表头
const columnDefs = [{
	        id:1,
	 		field: "code",
	 		sortable: true,
			 rowGroup: false,
	 		headerName: "编码",
	 		filter: 'agMultiColumnFilter',
	 		filterParams: {
	 			applyMiniFilterWhileTyping: true,
	 		},
	 	},
	 	{
			id:2,
	 		field: "name",
	 		sortable: true,
	 		headerName: "名称",
	     	rowGroup: false,
	 		filter: 'agMultiColumnFilter',
	 		filterParams: {
	 			applyMiniFilterWhileTyping: true,
	 		},
	 	},
	 	{
			id:3,
	 		field: "type",
	 		sortable: true,
	 		headerName: "类型",
	 		rowGroup: false,
	 		filter: 'agMultiColumnFilter',
	 		filterParams: {
	 			applyMiniFilterWhileTyping: true,
	 		},
	 	},
	 	{
			id:4,
	 		field: "time",
	 		sortable: true,
			 rowGroup: false,
	 		headerName: "时间",
	 		filter: 'agDateColumnFilter',
	 		// add extra parameters for the date filter
	 		filterParams: filterParamsTime
	 	},

	 ]
	 
	 