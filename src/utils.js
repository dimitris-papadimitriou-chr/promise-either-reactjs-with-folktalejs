 
import Maybe from 'folktale/maybe';

export let firstOrNone = function (array) {
  return array.length > 0 ?
    Maybe.Just(array[0]) :
    Maybe.Nothing()
}

  