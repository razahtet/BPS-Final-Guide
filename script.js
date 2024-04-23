let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");
let actText = document.getElementById("actText");
let actBox = document.getElementById("actBox");
let theImage = document.getElementById("theImage");
let image2 = document.getElementById("image2");
let skillName = document.getElementById("skillName");
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
let randomColor = ["skyblue", "lightgreen", "lightyellow", "lightseagreen", "lightslategrey", "lightsteelblue", "lightsalmon", "lightred"];
let randomColor2 = ["blue", "coral", "green", "darkblue", "crimson", "darkblue"]
let skillAr = ["Introduction", "Table of Contents", "Writing a Polished Resume and Cover Letter", "Interviews", "Dealing with Nervousness", "Managing Interpersonal Relationships", "Body Language", "Conclusion", "Thank You!"];
let textAr = ["<h3>In the business world, it is important to advance business and professional speaking and writing skills to be successful. The following guide will provide the necessary skills so that you can become an effective and professional speaker.<h1>Confidence, Passion, and Authenticity</h1>(Press 'Next' to go onto the guide and Previous to go backwards)</h3>",
  "<h2><ul><li>Writing a Polished Resume and Cover Letter</li><li>Interviews</li><li>Dealing with Nervousness</li><li>Managing Interpersonal Relationships</li><li>Body Langauge</li><li>Conclusion</li></ul></h2>",
  "Having a great resume and cover letter lets you stand out from other applicants as it tells who you are as a person and what you can do. It also shows your professionalism and how you can be a good fit for a certain job.<br><b>Resume:</b> A resume is a document that summarizes your qualifications, experience, and skills. <br><b>Cover Letter:</b> A cover letter is a short letter that tells the employer about why they should interview you for the job. <h2>Application in Work Life</h2>A Resume and Cover Letter are used to get you hired for a job since they tell who you are as a person in the professional world. Examples of each are shown on the right. <h2>Tips</h2><ul><li>Keep it clear and concise as employers only spend 15 to 20 seconds on it</li><li>Make it visually appealing and organized, such as easy-reading fonts, etc. </li><li>Describe skills accurately with bullet points (resume)</li><li>Tailor on skills and experiences that are related to the job and just don't list everything</li><li>Use words that are more descriptive and that 'show', ex. Advanced, Strengthened, Maximized</li></ul>",
  "After an employer looks at your resume and cover letter, they may give you an interview. By having good interview skills, you can show the employer how you stand out from others and are the most qualified and committed for the job.<h2>Applications in Work</h2>An interview allows you to show your skills to the employer and see if you are a good fit for the job. If you stand out against other applicants in the interview, you can be hired and find many work-related opportunities. <h2>Tips</h2><ul><li><b>Practice with Mock Interviews: </b>By practicing in interview settings, you will be more comfortable in a real interview, not be as nervous, and know what to answer to common questions, so you can ace it. </li><li><b>Preparing for the Interview:</b>Research the company on its values, and prepare for how you could talk about how you contribute to the company, such as opportunities for future growth, and how you could help as an indiviudal. Also, be ready for common questions they ask such as 'Talk about Yourself' or 'What you would do in _____ situation?'. Lastly, dress professionally and nicely, and be on time. </li><li><b>Use the STAR Method:</b>In interviews, employers can ask how you would deal with certain problems or situations in a work setting. By Using the Star Method below, you can show the employer how you solved the problems and your unique abilities: <ul><li><b>S:</b>Siutation (What was the situation or context?)</li><li><b>T:</b>Task (What was the task?)</li><li><b>A:</b>Action (What did you do?)</li><li><b>R:</b>Resolution (What did you do to resolve the problem? How did it go?)</li></ul></li></ul>",
  "It is common for everyone to be nervous during any work setting, such as interviews, giving a speech, meetings, etc. From one person to anothe person, they could be scared of messing up, have anxiety, be overthinking, etc. For example, looking at others' face expressions during your speech may allow you to overthink and lose focus, messing up.<h2>Applying These Skills</h2>By overcoming nervousness and anxiety, you can be comfortable and confident in expressing ideas and who you are in interviews, speeches, meetings, and more. This would also help you advance to the next level of the professional world, such as becoming a CEO, and more.<h2>Tips</h2><b>Channel Nervous Energy:</b>Channel your nervous energy by being calm and focused. Ways to 'channel it' include holding the speaking stand for, or taking deep breaths and pauses.<br><b>Mental Prep-Talk:</b>Before getting on stage, tell yourself positive words, such as 'I can do this. I am confident. I am strong. I will get this job', etc. By bracing yourself, you will feel more confident and less nervous. <br><b>Know Your Audience:</b>Know your audience beforehand, so you know how to engage and talk to them, and not mess up to be more nervous. For example, talking with your CEO and co-workers may be different than talking with your company suppliers.", "Even though it may not look important, by having good relationships with co-workers, your CEO, and others, it could improve your professional and work life. <h2>Interperonsal relationships in the Workplace</h2>It is important to have strong relationships with colleagues, managers, and others because you can learn a lot from each other, earn trust from each other, and be more productive as a whole. For example, if you had beef with a co-worker, and when tasks were assigned to both of you, you guys could end up arguing from not trusting each other, and there would be less productivity, bringing down the workflow of the company.<h2>Tips</h2><ul><li><b>Being a good listener:</b>By being a good listener, people will trust you more and rely on you with tasks assigned. </li><li><b>Getting food with colleagues: </b>If you go get food with your colleagues, you will be able to learn from each other and have a better understanding of the company. It would be even better one-on-one so that you could focus on the other person more and have stronger relationships.</li><li><b>Having good communication: </b>By communicating nicely and efficiently with your colleagues, they will trust you and vibe with you, and you will feel part of group and the company.</li></ul>", "Body Langauage is not only important in the business world, but is seen and used everywhere. It could tell people what you are like, what you are talking about, how passionate you are, how serious you are in many siutations, and more. <h2>Body Langauge in the Business World</h2>Body language is a way to show your feelings in business settings. It can describe how serious or passionate you are about certain topics in your speeches, projects, and more. But if you have poor body language, people may have different views on your ideas and topics and will not take you seriously. For example, if you are talking in your speech, but you look and sound obred, you are not using any hand motions, and you don't look passionate and/or energetic, they may not seem interested and will not really listen. But if you did vice versa, your audience would listen and beliefve whatever you are communicating and you would build stronger relationships.<h2>Tips</h2><ul><li><b>Have good body posture:</b>During a speech, don't slouch, stand up straight, and don't look down. It will make you be more serious and confident, and the audience will take you seriously and listen. </li><li><b>Using hand gestures:</b>By adding gestures and hand motions during your speech, your audience can connect, make better images in their head about what you are communicating, and see that you are really confident. </li><li><b>Be passionate:</b>By showing energy and enthusiasm, you can show your passion and drive in your speech, and the audience will actively listen, connect with you mentally, and be interested in the product or idea. ", "<b>My biggest takeaway from this class was how to deal with nervousness. Despite shoiwng nervous many times during class, I felt more confident during my last few speeches than I was at the beginning of class. I learned that by channeling my nervous energy and telling myself positive words such as 'I can do this' helped me a lot, despite my overthinking that came up during all of my speeches. Lastly, I learned that the best way to overcome it would be by practicing more, which I wished I prepared and did a lot more. At the end, if I could overcome anxiety and nervousness, I could build up the baby steps in the business world by being confident and ready to face any challenges that come up.</b>", "<b>Thank you for taking the time to read this guide! I hope you learned something new and that you can use it in your professional world. <br> If you are interested, check out my other coding projects down below: <a href='https://replit.com/@razahtet'><ul>https://github.com/razahtet?tab=repositories</ul></a></b>"];
let imageAr = [{
  "src": "speakingman.jpg",
  "alt": "Speaking Man"
}, {
  "src": "toccartoonclipart.png",
  "alt": "Table of Contents"
}, {
  "src": "resume.png",
  "alt": "Sample Resume"
}, {
  "src": "interview.jpg",
  "alt": "Interview Picture"
}, {
  "src": "nervousness.webp",
  "alt": "Man Nervous On Stage Picture"
}, {
  "src": "inpcom.jpg",
  "alt": "Coworkers Talking About Something Picture"
}, {
  "src": "bodylanguage.jpg",
  "alt": "Body Language Picture"
}, {
  "src": "keepcalm.png",
  "alt": "Keep calm and Carry Yarn"
}, {
  "src": "thankyou.jpg",
  "alt": "Thank you Picture"
}];
let transAr = ["none"];
let transWay = "";
let slideNum = 0;
updateEv("less");

function nextSlide() {
  clearInterval(transWay);
  actBox.style.left = "-200px";
  if (slideNum < textAr.length - 1) {
    slideNum++;
  }
  updateEv();
}

function prevSlide() {
  clearInterval(transWay);
  actBox.style.left = "-200px";
  if (slideNum > 0) {
    slideNum--;
  }
  updateEv();
}

function updateEv() {
  actText.scrollTop = 0;
  if (slideNum == 0) {
    prevButton.style.backgroundColor = "gray";
    prevButton.style.cursor = "not-allowed";
  } else if (slideNum == textAr.length - 1) {
    nextButton.style.backgroundColor = "gray";
    nextButton.style.cursor = "not-allowed";
  } else {
    prevButton.style.backgroundColor = "darkorange";
    prevButton.style.cursor = "pointer";
    nextButton.style.backgroundColor = "darkorange";
    nextButton.style.cursor = "pointer";
  }
  skillName.innerHTML = skillAr[slideNum];
  actText.innerHTML = textAr[slideNum];
  if (slideNum == 1) {
    skillName.style.position = "absolute";
    skillName.style.top = "20%";
    skillName.style.left = "0%";
    skillName.style.transform = "rotate(60deg)";
    theImage.style.width = "60%";
  } else {
    theImage.style.width = "45%";
    skillName.style.position = "inherit";
    skillName.style.top = "0%";
    skillName.style.transform = "rotate(0deg)";
  }
  skillName.style.color = randomColor2[Math.floor(Math.random() * randomColor2.length)];
  if (slideNum == 2) {
    image2.style.display = "inline-block";
  } else {
    image2.style.display = "none";
  }
  theImage.src = imageAr[slideNum]["src"];
  theImage.alt = imageAr[slideNum]["alt"];
  actBox.style.backgroundColor = randomColor[Math.floor(Math.random() * randomColor.length)];
  let theLeft;
  if (slideNum % 2 == 0) {
    actBox.style.left = "-500px";
    theLeft = -500;
    transWay = setInterval(function() {
      if (theLeft < 0) {
        theLeft += 3;
        actBox.style.left = theLeft + "px";
      } else {
        clearInterval(transWay);
      }
    }, 1);
  } else {
    actBox.style.left = "500px";
    theLeft = 500;
    transWay = setInterval(function() {
      if (theLeft > 0) {
        theLeft -= 3;
        actBox.style.left = theLeft + "px";
      } else {
        clearInterval(transWay);
      }
    }, 1);
  }
}

