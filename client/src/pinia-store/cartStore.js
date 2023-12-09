import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', {
    state: () => ({
        //  cards: [{ _id: 1, quantity: 1 }]
        cards: []
    }),
    getters: {
        getOffer: (state) => {
            return cardId = state.cards.find(offer => offer._id === cardId)
        }
    },
    actions: {
        addToCart(selectedId) {
            const offerInCart = this.cards.find(offer => offer._id === selectedId)

            if (!offerInCart) {
                this.cards.push({ _id: selectedId, quantity: 1 })
            }
            else {
                offerInCart.quantity += 1
            }
            // console.log(offer._id);
            // console.log(selectedId);
        },
        changeQuantity(offeId, event) {
            const Quantity = Number(event.target.value) ?? 0
            const offerInCart = this.cards.find(offer => offer._id === offeId)
            if (!offerInCart) {
                return
            }
            if (Quantity > 0) {
                offerInCart.quantity = Quantity
            }
            else {
                this.cards = this.cards.filter(offer => offer._id !== offeId)
            }
        }
    }
})