//+========================= TUGAS 3 SOAL BU AULIA 07.11.21 ===========================
    //End Point Kalkulator
    app.get("/kalkulator/:angka1/:angka2", (req,res) => {
    
        let angka1 = Number(req.params.angka1)
        let angka2 = Number(req.params.angka2)
        let penjumlahan = angka1 + angka2
        let pengurangan = angka1 - angka2
        let perkalian =  angka1 * angka2
        let pembagian = angka1 / angka2
         
        let response = {
        angka1: angka1,
        angka2: angka2,
        penjumlahan: penjumlahan,
        pengurangan: pengurangan,
        perkalian: perkalian,
        pembagian: pembagian
        }
        
        res.json(response)
        
        })
    
    //End Point Perulangan For
    app.post("/perulanganFor", (req,res) => {
    
        let awal = Number(req.body.awal) 
        let akhir = Number(req.body.akhir)
        let kelipatan = Number(req.body.kelipatan)
        let i
        let tampung=new Array()
        let total=0;
        
        for(i=awal;i<=akhir;i+=kelipatan){
            tampung.push(i)
            total += i
        }
        
        let response = {
        tampung,
        total : total

        }
        
        res.json(response)
        })

    //End Point Penjumlahan Array
    app.post("/penjumlahanArray", (req,res) => {
    
        let MatrixA= [
            [9,2],
            [3,4]
        ];

        let MatrixB= [
            [1,8],
            [4,6]
        ];
        
        let hasil=new Array()
        let i
        let j
        for(i=0;i<2;i++){
            for(j=0;j<2;j++){
                hasil.push(MatrixA[i][j]+MatrixB[i][j])
            }
        }
        
        let response = {
        MatrixA: MatrixA,
        MatrixB: MatrixB,
        penjumlahan: hasil
        }
        
        res.json(response)
        })
