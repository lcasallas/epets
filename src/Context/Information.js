import React from 'react';

export const Information = {
  data:{
    sections:[
      {
        title:'Juguetes destacados',
        color:'toy',
        subTitle:[
            {
              name:'relajación',
              photo:'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg',
              body:'Lorem Ipsum is simply dummy text of the print in gand type setting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ittomak eat y pespeci men book',
            },
            {
              name:'gatos',
              photo:'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg',
              body:'Lorem Ipsum is simply dummy text of the print in gand type setting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ittomak eat y pespeci men book',
            },
            {
              name:'peces',
              photo:'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg',
              body:'Lorem Ipsum is simply dummy text of the print in gand type setting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ittomak eat y pespeci men book',
            },
          ],
      },
      {
        title:'comida',
        color:'food',
        subTitle:[
          {
            name:'adultos',
            photo:'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg',
            body:'Lorem Ipsum is simply dummy text of the print in gand type setting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ittomak eat y pespeci men book',
          },
          {
            name:'cachorros',
            photo:'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg',
            body:'Lorem Ipsum is simply dummy text of the print in gand type setting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ittomak eat y pespeci men book',
          },
          {
            name:'babys',
            photo:'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg',
            body:'Lorem Ipsum is simply dummy text of the print in gand type setting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ittomak eat y pespeci men book',
          },
        ],
      },
      {
        title:'servicios medicos',
        color:'service',
        subTitle:[
          {
              name:'doc perros',
              photo:'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg',
              body:'Lorem Ipsum is simply dummy text of the print in gand type setting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ittomak eat y pespeci men book',
              link:'https://github.com/',
            },
            {
              name:'doc gatos',
              photo:'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg',
              body:'Lorem Ipsum is simply dummy text of the print in gand type setting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ittomak eat y pespeci men book',
              link:'https://github.com/',
            },
          ],
      },
    ]
  }
};

const InformationContext = React.createContext(Information.data);

export default InformationContext;