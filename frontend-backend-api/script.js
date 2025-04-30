window.addEventListener('DOMContentLoaded', () => {
   fetch('http://localhost:8080/data')
     .then(res => res.json())
     .then(data => {
       document.getElementById('professionalName').textContent = data.professionalName;
       document.getElementById('professionalImage').src = data.professionalImage;
       document.getElementById('nameLink').href = data.nameLink;
       document.getElementById('nameLink').textContent = data.nameLink;
       document.getElementById('primaryDescription').textContent = data.primaryDescription;
       document.getElementById('workDescription1').textContent = data.workDescription1;
       document.getElementById('workDescription2').textContent = data.workDescription2;
       document.getElementById('linkTitleText').textContent = data.linkTitleText;
       document.getElementById('linkedInLink').href = data.linkedInLink;
       document.getElementById('linkedInLink').textContent = "LinkedIn";
       document.getElementById('githubLink').href = data.githubLink;
       document.getElementById('githubLink').textContent = "GitHub";
       document.getElementById('contactText').textContent = data.contactText;
     })
     .catch(error => {
       console.error('Error fetching data:', error);
     });
 });