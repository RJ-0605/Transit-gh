
function PrintDiv() {  
            var divContents = document.getElementById("printdivcontent").innerHTML;  
            var printWindow = window.open('', '', 'height=400,width=600');  
            printWindow.document.write('<html><head><title>Print DIV Content</title>');  
            printWindow.document.write('</head><body >');  
            printWindow.document.write(divContents);  
            printWindow.document.write('</body></html>');  
            printWindow.document.close();  
            printWindow.print();  
        }  