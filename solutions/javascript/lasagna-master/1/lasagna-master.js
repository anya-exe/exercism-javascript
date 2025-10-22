/// <reference path="./global.d.ts" />


// @ts-check

export function cookingStatus(remainingTime){
    return remainingTime > 0
        ? 'Not done, please wait.'
        : remainingTime === 0
        ? 'Lasagna is done.'
        : 'You forgot to set the timer.';
}

export function preparationTime(layers, avg = 2){
    return layers.length * avg;
}

export function quantities(layers){
    let result = {
        noodles : 0,
        sauce : 0,
    }
   for (let layer of layers) {
        if (layer === 'noodles') {
            result.noodles += 50;
        } else if (layer === 'sauce') {
            result.sauce += 0.2;
        }
    }
    return result;
}

export function addSecretIngredient(listFriend, myList) {
    myList.push(listFriend[listFriend.length - 1]);
}

export function scaleRecipe(recipe, people) {
  return Object.keys(recipe).reduce((newRecipe, ingredient) => {
    newRecipe[ingredient] = recipe[ingredient] / 2  * people;
    return newRecipe;
  }, {});
}
