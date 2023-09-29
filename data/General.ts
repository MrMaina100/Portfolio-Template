// this is your personal data ...(you)

export const GeneralData = {

     id:1,
      name: 'John Doe',
      img: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_3.png',
      // if you plan on using a photo you you brought into the folder please do go to the General.tsx file as i have explained how to get your photo to display and skip this part for bringing in an imaage using a link
      title: 'Senior UI Engineer.',
      overview: 'UI engineer crafting interfaces. Building polished software and web experiences. Experimenting with magical details in user interfaces.',
      currentOverview: 'Currently spearheading the future of innovative design solutions for clients worldwide at AllStars.inc'

   
}


// your work experience 


type WorkExperienceType = {
      id: number,
      startDate: number,
      EndDate: number | string
      Status: string,
      Company: string,
      Description: string
}[]


// you can add as many work Experience as you would like

export const workExperince: WorkExperienceType =[
      { 
        id:1,
        startDate : 2022,
        EndDate: 'Now',
        Status: 'Senior Developer',
        Company: 'AllStars.inc',
        Description: 'Shaped new product ideas and brand vision. Founded design systems and process. Directed the design team, and lead on three pillars: design systems, collaboration and prototyping.'
      },
        { 
        id:2,
        startDate : 2019,
        EndDate : 22,
        Status: 'FullStack Developer ',
        Company: 'Linear',
        Description: 'Creativity for enterprise and startups alike, during the app store goldrush of the 2020s. Built a design team, culture and process.'
      },
        { 
        id:3,
        startDate : 2018,
        EndDate : 19,
        Status: 'FrontEnd Developer ',
        Company: 'Freelancer',
        Description: 'Worked as a freelancer for clients around the world'
      }

]




