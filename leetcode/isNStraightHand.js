/**
 * @param {number[]} hand 
 * @param {number} groupSize 
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    const cardCount = new Map();
    for (const card of hand) {
        cardCount.set(card, (cardCount.get(card) || 0) + 1);
    }

    const sortedCards = Array.from(cardCount.keys()).sort((a, b) => a - b);

    for (const card of sortedCards) {
        const count = cardCount.get(card);
        
        if (count > 0) {
            for (let i = 0; i < groupSize; i++) {
                const currentCard = card + i;
                const currentCount = cardCount.get(currentCard) || 0;

                if (currentCount < count) return false;

                cardCount.set(currentCard, currentCount - count);
            }
        }
    }
    return true;
}

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8],3))