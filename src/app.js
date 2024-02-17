document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Coffee Kapal Api', img: '1.png', price: 30000},
            { id: 2, name: 'Coffee White Coffee', img: '2.png', price: 40000},
            { id: 3, name: 'Coffee Good Day', img: '3.png', price: 50000},
            { id: 4, name: 'Coffee Berastagi', img: '4.png', price: 60000},
            { id: 5, name: 'Coffee Cappuccino', img: '5.png', price: 70000},
            { id: 6, name: 'Coffee Tora Bika', img: '6.png', price: 80000}
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total : 0,
        quantity: 0,
        // fungsi add / nambah item
        add(newItem) {
            // cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada / cart masih kosong
            if(!cartItem) {
            this.items.push({...newItem, quantity: 1, total: newItem.price});
            this.quantity++;
            this.total += newItem.price;
        } else {
            // jika brang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
            this.items = this.items.map((item) => {
                // jika barang berbeda
                if(item.id !== newItem.id) {
                    return item;
                } else {
                    // jika barang sudah ada,tambah quantity dan totalnya
                    item.quantity++;
                    item.total = item.price * item.quantity;
                    this.quantity++;
                    this.total += item.price;
                    return item;
                }
            });
        }
            // console.log(this.total);

        },

        // untuk mengurai item/ remove
        remove(id) {
            // ambil item yang mau diremove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            // jika item lebih dari 1
            if(cartItem.quantity > 1) {
                // telusuri 1 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang diklik
                    if(item.id != id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1){
                // jika barangnya sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -=cartItem.price;
            }
        }
    });
});

// form validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');

form.addEventListener('keyup', function() {
    for(let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].value.length !== 0) {
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled');
        } else {
            return false;
        }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled'); 
});

// kirim data ketika tombol checkout diklik
checkoutButton.addEventListener('click', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    // const message = formatMessage(objData);
    // window.open('http://wa.me/6282163339312?text=' + encodeURIComponent(message));
    // console.log(objData); 

    // minta transaction token menggunakan ajax / fetch
    try {
        const response = await fetch('php/placeOrder.php', {
            method: 'POST',
            body: data,
        });
        const token = await response.text();
        // console.log(token);
        window.snap.pay(token);

    } catch (err) {
        console.log(err.message);
    }

});

// format pesan whatsapp 
const formatMessage = (obj) => {
    return `Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    No.Hp: ${obj.phone}
Data Pesanan
    ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`)}
TOTAL: ${rupiah(obj.total)}
Mauliate Mbo.`;
    // let message = '';
};

// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        // minimumFractionDigits: 0,
    }).format(number);
};