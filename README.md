# Introduction
---
This is a productivity meeting website that uses the agora SDK with DjangoREST as the backend and React.js as the frontend

# Collaborators 
---
|    Name         |             Role(s)                 |    Discord         |        Email           |     Github     |  
|-----------------|:-----------------------------------:|:------------------:|:----------------------:|:--------------:|
| Bello Ango      | Project Manager/ Backend Developer  |  Krøn#7156         | angobello0@gmail.com   |     Grey-A     |
| Vincent Okereke | Frontend Developer                  | Pythoniclaver#8977 | vincentcode0@gmail.com |  pythoniclaver |
| Emmanuel Edor   | UI/UX Designer                      |     Maxe#8654      | emmeyboy9@gmail.com    |                |

# Project Demo
---







Click [here](# "Meetra Demo") to see a quick vimeo video where we use the website

# How we acheived maximum productivity whilst in a video call
---
The appproach we took towards this was that we asked ourselves these questions, 
- `how do we make meetings productive?` 
- `what exactly is productive?` 
- `and how do we increase productivity?` <br/>
we came to two conclusions regarding this matter, **_`productive meetings arent necessarily long and productive meetings go straight to the point.`_**, so having this in mind we began searching for how to reduce the time of our users spend in those endless meetings while addressing only the keypoints and this [article](https://fellow.app/blog/meetings/effective-strategies-to-shorten-meetings-at-work/ "Fellow App") helped us map out exactly how to do that.<br/>
##### We designed our website according to the following:
- After a successful login when our user choses to create a meeting, 
- he will be prompted for a **`name/title`** for the meeting so that the ones he is inviting will know a general outline of what the meeting is about e.g **End of year Conference**, 
- after that then he will be prompted for a **`short description`** that further outlines what the meeting is about e.g. **Planning xyz company's annual end of year conference including budget allocation and guest list**, 
- then he will specify the time if its a scheduled meeting or click on **`now`** if the meeting will take place impromptu 
- the user will then set the time in which a reminder will be send to everyone involved in the meeting that it will take place ranging from `1hour upto a day before the meeting.`
- then the user will provide what we at meetra call _`milestones`_ for the meeting which are equivalent to bullet points or briefs which outline the major talking points of the meeting with their description and also a duration in which it will take to discuss that milestone, our team decided that the max duration shouldnt be more than `an hour`, if it is then we belive it should be 2 milestones instead of 1.
- Afterwards the user will add the ones he wants to invite to his meeting and when he clicks "create meeting", an email, text message and inappp notification will be sent to the invitees but they will only be added to the meeting list if they accept the meeting in the app.

# Resources Used
---
- Figma:
      We used this to make our mockup design with the low and high fidelity mockups and a case study, [Here is a link to view it](https://www.figma.com/file/ZU0c6dMLvkyQ1tbGZW0ut3/Meetra?node-id=28%3A565 "Meetra Figma Design")
- React.js:
      We used this as our Frontend framework.
- DjangoREST Framework:
      We used this as our backend API with an SQLite3 Database to support it
- Lucid Charts:
      We used this to make a visualization on how our Databases relate with each other, [Here is a link to view it](https://lucid.app/lucidchart/6f61d1d6-71ea-49d5-89d9-e8f7a9c28ace/edit?beaconFlowId=8D64D449961BBA3E&invitationId=inv_421214e3-ce3d-4937-b315-b14649439817&page=0_0# "Meetra Lucid Chart")
- PostMan:
      We used this to test our Backend API, [Here is a link to the Postman website](https://www.postman.com/ "Postman Website")

# Difficulties we Faced
---
Here are some of the difficulties me and my team faced in this project:
- **Frontend**: our frontend developer had issues with dynamically rendering react components, he said creating reusable components and keeping track of state gave him                 quite a bit of a headache for some time.
- **Design**: our designer had some issues regarding coming up with an initial sketch for the website, he found it hard to come up with a frame for the meeting page and the dashboard.
- **Backend**: At the backend the major issue i faced was understanding and mapping out the api endpoints my front end developer needs and making sure it delivers an                  accurate and easy to understand response whilst making sure we made the least amount of api calls to the backend as we can.
- **Integrating the Agora SDK**: Integrating agora to our project at first was a bit of a pain because even though the documentations covers most stuff, installing                                    the sdk wasnt really covered directly it just assumed people know how to install it so it just made us download zip files containing                                    it, and the tutorials they have arent working because some of their modules are depreciated so it was basically useless apart for                                      making references.

#Contact the team
--
For any enquiries or if you want to contact the team you can do this through the Project manager, **`Bello Ango`**
