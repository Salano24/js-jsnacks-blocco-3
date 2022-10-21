let animali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'uomo',
        famiglia: 'umani',
        classe: 'mammiferi'
    },
    {
        nome: 'tonno',
        famiglia: 'thunnidae',
        classe: 'pesci'
    }
]

const mammiferiEl = animali.filter(animali => animali.classe === 'mammiferi')
console.log(mammiferiEl);