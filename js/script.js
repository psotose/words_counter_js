
function text_counter(separator){
    var doc = document.getElementById('texto-entrada');
    var doc_arr = doc.innerText.replace(/\W/g,' ').split(separator);  
    
    var letters_count = {}
    doc_arr.forEach(function(letter){
        letter = letter.toLocaleLowerCase()
        if(letters_count[letter]){ 
            letters_count[letter] += 1;
        } else {
            letters_count[letter] = 1;
        }        
    })  
return letters_count
}

function create_p_with_strong(){
    var paragraph = document.createElement('p');
    var strong = document.createElement('strong');
    var span = document.createElement('span');
    
    paragraph.appendChild(strong);
    paragraph.appendChild(span);
    return paragraph
    }

function each_element(collection){
    for(elem in collection){
        var paragraph = create_p_with_strong();
        var elem_name =document.createTextNode(elem +": ")
        var elem_count = document.createTextNode(collection[elem]);

        paragraph.children[0].appendChild(elem_name);
        paragraph.children[1].appendChild(elem_count);

        document.getElementById('resultados').appendChild(paragraph);

    }
}
function do_job(){
    var letters = text_counter('')
    each_element(letters);
    
    var words = text_counter(' ')
    each_element(words);
}    

