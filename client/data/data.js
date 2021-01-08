export const data = {
  individuals : [
    {
      id: 'I002',
      fname: 'Neethu',
      mname: 'Elizabeth',
      lname: 'Jacob',
      img: require('../assets/images/neethu.jpg'),
      gender: 'female',
      birth: {
        date: '1978/07/22',
        place: 'Kottayam',
        parents: [
          { id: 'I011', role: 'father' },
          { id: 'I012', role: 'mother' }
        ]
      },
      partnerships: ['ep001'],
      children: ['I003']
    }
  ],
  partnerships: [
    {
      id: 'ep001',
      type: 'marriage',
      date: '2003/10/20',
      place: 'p002',
      individuals: [
        { id: 'I001', role: 'husband' },
        { id: 'I002', role: 'wife' }
      ]
    }
  ]
}



