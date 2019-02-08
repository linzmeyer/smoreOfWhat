// define smore and smoreStuff
let smore = [];
let smoreStuff = ['thing1', 'thing2', 'thing3'];

// replace things with names.
smoreStuff.splice(0, smoreStuff.length, 'gramcracker', 'chocolate', 'marshmallow');

// create new vars with relateable names that correlate with smoreStuff elements.
let gramcracker = smoreStuff[0];
let chocolate = smoreStuff[1];
let marshMallow = smoreStuff[2];

// First, you take the gram.
smore.push( gramcracker );

// You stick the chocolate on the gram.
smore.push( chocolate );

// Then, you roast the mallow
marshMallow = roastMallow( marshMallow );

// ...you stick it on the chocolate.
smore.push( marshMallow );

// Then. you cover it with the other end.
smore.push ( gramcracker );

// Then, you STUFF!


function roastMallow( item ) {

  if ( item === 'marshmallow' ) {

    //roast mallow
    let flamingMallow = true;

    if ( flamingMallow === true ) {
      item += ' (roasted)';
    }

    // blow out flame
    flamingMallow = false;
  }
  return item;
}
