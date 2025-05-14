# TYPESENSE
Typesense adalah mesin pencari sumber terbuka yang toleran terhadap kesalahan ketik yang dioptimalkan untuk pencarian instan di bawah 50 ms , sekaligus memberikan pengalaman pengembang yang intuitif .

Situs resmi [Typesense](https://typesense.org/ "Typesense").

## Cara Download Respository
1. clone respository projek
   ``` bash
   git clone https://github.com/periartaa/typesense-studyperi.git
   ```
2. pastikan server Typesense run lalu running projek (Pkai WSL)
   ``` bash
   npm start
   ```

## Pastikan typesense Run sebelum dijalankan
cara menjalankan typesense (Pakai WSL)

1. Download Typesense Server Jalankan perintah berikut di folder mana saja:
   ``` bash 
   wget https://dl.typesense.org/releases/0.25.2/typesense-server-0.25.2-linux-amd64.tar.gz
   ```
   ```bash
   tar -xzf typesense-server-0.25.2-linux-amd64.tar.gz
   ```
2. Jalankan Typesense Server
   ``` bash
   TYPESENSE_DATA_DIR=/var/lib/typesense TYPESENSE_API_KEY=AS3das2awQ2 ./typesense-server
   ```
3. Cek apakah server sudah berjalan dengan benar
   ``` bash
   curl http://localhost:8108/health
   ```
   Pastika muncul
   ``` bash
   {"ok":true}
   ```

   
## Kesimpulan
Typesense adalah search engine open-source yang dirancang untuk memberikan pengalaman pencarian yang cepat, relevan, dan mudah diintegrasikan ke dalam aplikasi. Dalam implementasinya, Typesense memberikan sejumlah keuntungan terutama untuk pengembangan aplikasi yang membutuhkan pencarian teks yang efisien.

Keuntungan : 
   ``` bash
   1. Typesense memiliki dokumentasi yang jelas dan API yang sederhana.
   2. Mendukung deployment cepat di berbagai lingkungan seperti Docker, bare-metal, atau cloud.
   3. Tersedia client libraries untuk berbagai bahasa pemrograman (JavaScript, Python, dll).
   4. Cocok untuk digunakan pada e-commerce, katalog produk, aplikasi pencarian dokumen, dan lainnya.
   5. Tersedia Gratis dan open-source di bawah lisensi Apache 2.0. dan Versi cloud tersedia dengan biaya berlangganan untuk manajemen dan skalabilitas 
   ```


 
