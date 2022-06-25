export const initialState = {
  authInfo:{},
  cartList:[],
  productList:[{
    title: 'Do esse ad nisi dolor ullamco Lorem deserunt commodo do et excepteur.',
    price: '1.02',
    rating: '4',
    imageURL: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'
  },
  {
    title: 'Amet do fugiat officia exercitation exercitation eiusmod ad aliqua duis minim.',
    price: '2.03',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/911TJ1CDbLL._AC_UL320_.jpg'
  },
  {
    title: 'Consequat eiusmod cillum tempor cillum excepteur velit laboris veniam.',
    price: '3.04',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71edjA10hZL._AC_UL320_.jpg'
  },
  {
    title: 'Tempor in exercitation do elit deserunt non adipisicing proident adipisicing est.',
    price: '4.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71+ZD+DmiyL._AC_UL320_.jpg'
  },
  {
    title: 'Cupidatat aliquip laboris tempor eu eiusmod veniam velit cupidatat Lorem Lorem exercitation proident.',
    price: '5.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71J2Te621hL._AC_UL320_.jpg'
  },
  {
    title: 'Quis officia culpa commodo ut laborum ex laboris elit aliqua irure mollit culpa dolore sunt.',
    price: '6.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71sm8MRnZ2L._AC_UL320_.jpg'
  },
  {
    title: 'Incididunt nisi aliqua elit nostrud dolore consequat deserunt nostrud laboris ipsum id deserunt commodo.',
    price: '7.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/918Jc1+ElaL._AC_UL320_.jpg'
  },
  {
    title: 'Voluptate aliqua qui deserunt cillum amet excepteur eu velit.',
    price: '8.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/61l3aUqHRVL._AC_UL320_.jpg'
  },
  {
    title: 'Voluptate aliqua qui deserunt cillum amet excepteur eu velit.',
    price: '8.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/51HMIalApuL.jpg'
  },
  {
    title: 'Voluptate aliqua qui deserunt cillum amet excepteur eu velit.',
    price: '8.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/41Ua8flnb4L._AC_UL320_.jpg'
  },
  {
    title: 'Voluptate aliqua qui deserunt cillum amet excepteur eu velit.',
    price: '8.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/41+ERlW2gqL._AC_UL320_.jpg'
  },
  {
    title: 'Est cillum ad incididunt id quis magna pariatur ullamco aliqua nisi.',
    price: '9.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/51SICavnBKL._AC_UL320_.jpg'
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartList:[...state.cartList, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartList: state.cartList.filter(item => item.id !== action.payload)
      };
    case 'SIGN_IN':
      return{
        ...state,
        authInfo:action.payload
      }
    default:
      return state;
  }
}