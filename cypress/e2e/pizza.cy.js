describe("Pizza order page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5174/order");
    });

    //Boyut seçimi
    it("Boyut seçimi yapılmadığında hata gösteriyor mu?", () => {
        cy.get('button[type="submit"]').click();
        cy.contains("Boyut seçilmelidir").should("be.visible");
    });
    it("Radio butonları doğru çalışıyor mu?", () => {
        const sizes = ["S", "M", "L"];
        sizes.forEach((size) => {
            cy.get(`input[name="boyut"][value="${size}"]`).check({ force: true }).should("be.checked");
            sizes.filter((s) => s !== size).forEach((other) => {
                cy.get(`input[name="boyut"][value="${other}"]`).should("not.be.checked");
            });
        });
    });

    //Hamur seçimi

    it("Hamur seçilmediğinde hata gösteriyor", () => {
        cy.get("form").submit();
        cy.get("p.text-red-500").should("contain.text", "Boyut seçilmelidir");
    });

    //İnputa isim yazılabiliyor mu?
    it("Inputa metin girilebiliyor", () => {
        cy.get('input[name="isim"]').type("Safiye Dalkıran").should("have.value", "Safiye Dalkıran")
    })

    //Inputa not yazılabiliyor mu?
    it("Inputa not yazılabiliyor", () => {
        cy.get('input[name="not"]').type("Sıcak gelsin lütfen").should("have.value", "Sıcak gelsin lütfen")
    })
    //Malzeme seçimi
    it("En az 4 ve en fazla 10 malzeme seçilebiliyor", () => {
     
        //3 tane seçelim
        cy.get('#checkbox-0').check()
        cy.get('#checkbox-1').check()
        cy.get('#checkbox-2').check()

        cy.contains("En az 4 ve en fazla 10 malzeme seçebilirsiniz").should("be.visible")

    })

    //Form
    it("Form tamamlandığında başarılı toast ve Success componenti gösteriliyor", () => {
        cy.get("#isim").type("Safiye Dlkıran");
        cy.get("input[name='boyut'][value='M']").check();
        cy.get("#dough").select("ince");
        cy.get("input[type='checkbox']").each((el, index) => {
            if (index < 4)
                cy.wrap(el).check();
            cy.get("button[type='submit']").click();
            cy.get(".Toastify__toast").should("contain.text", "Siparişiniz başarıyla alındı");
            cy.contains("Sipariş Toplamı").should("exist");
        });
    })

})