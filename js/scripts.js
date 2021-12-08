    
    
    // Toggle the side navigation  
    const sidebarToggle = document.body.querySelector('#sidebarToggle');

    
// i have to run the file with the live server so it will work
    $(document).ready(function() {
        $('#Customer').DataTable( {
            "ajax": "./json/data.json",
            "columns": [
                { "data": "name" },
                { "data": "address" },
                { "data": "city" },
                { "data": "age" },
                { "data": "last visit" },
                { "data": "orders" }
            ]
        } );
    } );
