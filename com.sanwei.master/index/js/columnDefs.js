
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
			 
			 enableRowGroup: true ,
	 		headerName: "商家编码",
	 		filter: 'agMultiColumnFilter',
	 		filterParams: {
	 			applyMiniFilterWhileTyping: true,
				
	 		},
	 	},
	 	{
			id:2,
	 		field: "name",
	 		sortable: true,
	 		headerName: "书名",
	     	// rowGroup: false,
			enableRowGroup: true ,
			enableRowGroup: true ,
	 		filter: 'agMultiColumnFilter',
	 		filterParams: {
	 			applyMiniFilterWhileTyping: true,
	 		},
	 	},
	 	{
			id:3,
	 		field: "series",
	 		sortable: true,
	 		headerName: "系列",
	 		// rowGroup: false,
			enableRowGroup: true ,
	 		filter: 'agMultiColumnFilter',
	 		filterParams: {
	 			applyMiniFilterWhileTyping: true,
				  
	 		},
	 	},
	 	{
			id:4,
	 		field: "time",
	 		sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
	 		headerName: "时间",
	 		filter: 'agDateColumnFilter',
	 		// add extra parameters for the date filter
	 		filterParams: filterParamsTime
	 	},
		{
			id:5,
			field: "tm",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "天猫运营",
			filter: 'agMultiColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		{
			id:6,
			field: "pdd",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "拼多多运营",
			filter: 'agMultiColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		{
			id:7,
			field: "sup",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "供货商",
			filter: 'agMultiColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		{
			id:8,
			field: "brand",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "品牌",
			filter: 'agMultiColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		{
			id:9,
			field: "spec",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "版本",
			filter: 'agMultiColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},{
			id:10,
			field: "back",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "返点",
			filter: 'agNumberColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		{
			id:11,
			field: "barcode",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "主条码",
			filter: 'agMultiColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		{
			id:12,
			field: "price",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "定价",
			filter: 'agNumberColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		{
			id:13,
			field: "disc",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "折扣",
			filter: 'agNumberColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		{
			id:14,
			field: "cost",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "单本成本",
			filter: 'agNumberColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		{
			id:15,
			field: "shop",
			sortable: true,
			 // rowGroup: false,
			 enableRowGroup: true ,
			headerName: "店铺",
			filter: 'agMultiColumnFilter',
			// add extra parameters for the date filter
			filterParams: filterParamsTime
		},
		
	 ]
	 
	 