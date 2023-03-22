class Pokemon {
  // Propriétés
  health: number = 100
  
  // Méthodes
  pokemon_health() {
    console.log(`Votre Pokemon a : ${this.health} point de vie`)
  }
}

class carapuce extends Pokemon {
  // Propriétés
  info: string = 'Carapuce est de type eau'

  // Méthodes
  carapuce_info() {
    console.log(this.info);
  }
}

class bulbizar extends Pokemon {
  // Propriétés
  info: string = 'Bulbizar est de type plante'

  // Méthodes
  bulbizar_info() {
    console.log(this.info);
  }
}

class salameche extends Pokemon {
  // Propriétés
  info: string = 'Salameche est de type feu'

  // Méthodes
  salameche_info() {
    console.log(this.info);
  }
}

// J'instancie un objet avec la class Carapuce
const Carapuce = new carapuce

Carapuce.carapuce_info()
Carapuce.pokemon_health()

// J'instancie un objet avec la class Carapuce
const Bulbizar = new bulbizar

Bulbizar.bulbizar_info()
Bulbizar.pokemon_health()

// J'instancie un objet avec la class Carapuce
const Salameche = new salameche

Salameche.salameche_info()
Salameche.pokemon_health()
