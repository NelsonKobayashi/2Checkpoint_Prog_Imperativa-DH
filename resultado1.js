var pratos = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8
}

function preparo (comida, tempo){
    if (comida == 'pipoca' || comida == 'macarrao' || comida == 'carne' || 
        comida =='feijao' || comida == 'brigadeiro') {
            if (tempo == pratos[comida]) { console.log(`${comida} preparado(a), bom apetite!`);
            } else if (tempo < pratos[comida]) { console.log ('Tempo insuficiente, comida não está pronta.');
            } else if (tempo > pratos[comida] && (tempo < pratos[comida]*3)) { console.log ('A comida queimou... :(');
            } else if (tempo > (pratos[comida]*3)) { console.log('KABUUUUUUMMMM !!!! *.*');
            }
    } else { 
        return 'Comida inexistente, tente novamente.'
    }
}
preparo ("pipoca", 10);
preparo ("macarrao", 20);
preparo ("feijao", 30);
preparo ("carne", 7);