import React from 'react'
import { Link } from 'react-router-dom'; 
import './WebView.css'
import ImgAsset from '../public'

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



export default function WebView () {


	const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);



	return (
		<div className='WebView_WebView'>
			<span className='Skills'>Skills</span>
			<span id='work' className='Work'>Work</span>
			<span className='About'>About</span>
			<span className='Contact'>Contact</span>
			<img className='Line1' src = {ImgAsset.WebView_Line1} />
			<div className='Nav'>
				<span className='Contact_1'>Contact</span>
				<span className='Skills_1'>Skills</span>
				<Link to="#work"  className='Work_1'>Work</Link>
				<span className='About_1'>About</span>
			</div>
			<div className='DevSkills'>
				<span className='CSS'>CSS</span>
				<span className='JavaScript'>JavaScript</span>
				<span className='Postgresql'>Postgresql</span>
				<span className='RubyonRails'>Ruby on Rails</span>
				<span className='Git'>Git</span>
				<span className='HTML'>HTML</span>
			</div>
			<img className='Photo' src = {ImgAsset.WebView_Photo} />
			<div className='CodeCastButton'>
				<span className='CodeCast'>CodeCast</span>
			</div>
			<div className='TutorialsButton'>
				<span className='CheckOutAllMyTutorials'>Check Out All My Tutorials</span>
			</div>
			<div className='TriviaButton'>
				<div className='Rectangle3'/>
				<span className='TriviaGame'>Trivia Game</span>
			</div>
			<div className='TriviaExplain'>
				<img className='Arrow11' src = {ImgAsset.WebView_Arrow11} />
				<span className='IcreatedthisfromscratchYoucanfindtheseriesoftutorialsonithere'>I created this from scratch! You can find the series of tutorials on it here.</span>
			</div>
			<div className='CodeCastExplain'>
				<img className='Arrow21' src = {ImgAsset.WebView_Arrow21} />
				<span className='BuiltoutthedesignsmadebyourdesignerduringmyinternshipwithCodeCastonwebflow'>Built out the designs made by our designer during my internship with CodeCast on webflow!</span>
			</div>
			<div className='SocialIcons'>
				<img className='Vector' src = {ImgAsset.WebView_Vector} />
				<img className='Vector_1' src = {ImgAsset.WebView_Vector_1} />
				<img className='Vector_2' src = {ImgAsset.WebView_Vector_2} />
				<img className='Vector_3' src = {ImgAsset.WebView_Vector_3} />
				<img className='Vector_4' src = {ImgAsset.WebView_Vector_4} />
				<img className='Vector_5' src = {ImgAsset.WebView_Vector_5} />
			</div>
			<div className='embedcode1'>
				<img className='Vector_6' src = {ImgAsset.WebView_Vector_6} />
			</div>
			<div className='NonDevSkills'>
				<span className='Illustration'>Illustration</span>
				<span className='Writing'>Writing</span>
				<span className='SocialMedia'>Social Media</span>
				<span className='ContentCreation'>Content Creation</span>
				<span className='TeamManagement'>Team Management</span>
				<span className='Communication'>Communication</span>
			</div>
			<div className='manworkingonlaptop1'>
				<div className='Group'>
					<img className='Vector_7' src = {ImgAsset.WebView_Vector_7} />
				</div>
			</div>
			<div className='AboutMeBio'>
				<span className='StillIhadyettofindthecareerpaththatsparkedinterestformeInJanuaryof2020IdecidedtolookintocareersinthetechworldandendedupundergoingacodingbootcampintheSpringof2020InNovemberofthesameyearIgotmyfirstinternshipasadeveloperatCodeCastandnowworktherefulltimeasadeveloperandcontentcreatorIamalsoextremelypassionateaboutdogsandcouldtalkaboutTVandmusicforever'><br/><br/>Still, I had yet to find the career path that sparked interest for me. In January of 2020, I decided to look into careers in the tech world, and ended up undergoing a coding bootcamp in the Spring of 2020.<br/><br/>In November of the same year, I got my first internship as a developer at CodeCast, and now work there fulltime as a developer and content creator!<br/><br/>I am also extremely passionate about dogs, and could talk about TV and music forever!</span>
				<span className='AfterovertenyearsofworkinginretailIdecidedIneededanewcareerIhavealwaysbeencreativedoingvisualartmostofmylifeandhavingpreviouslyearnedanAssociatesDegreeofCreativeWritingatCapilanoUniversity'>After over ten years of working in retail I decided I needed a new career. I have always been creative, doing visual art most of my life and having previously earned an Associates Degree of Creative Writing at Capilano University.<br/></span>
			</div>
			<img className='ExEmbeddedVideo' src = {ImgAsset.WebView_ExEmbeddedVideo} />
			<div className='CheckOutExplain'>
				<img className='Arrow51' src = {ImgAsset.WebView_Arrow51} />
				<span className='AnexampleofoneofthecodingtutorialsIcreatedonCodeCast'>An example of one of the coding tutorials I created on CodeCast! </span>
				<img className='Arrow31' src = {ImgAsset.WebView_Arrow31} />
			</div>
			<div className='emailsquarecolor1'>
				<img className='Vector_8' src = {ImgAsset.WebView_Vector_8} />
			</div>
			<span className='examplegmailcom'>example@gmail.com</span>
			<div className='SocialIcons_1'>
				<img className='Vector_9' src = {ImgAsset.WebView_Vector_9} />
				<img className='Vector_10' src = {ImgAsset.WebView_Vector_10} />
				<img className='Vector_11' src = {ImgAsset.WebView_Vector_11} />
				<img className='Vector_12' src = {ImgAsset.WebView_Vector_12} />
				<img className='Vector_13' src = {ImgAsset.WebView_Vector_13} />
				<img className='Vector_14' src = {ImgAsset.WebView_Vector_14} />
			</div>
			<div className='Intro'>
				<img className='Arrow52' src = {ImgAsset.WebView_Arrow51} />
				<span className='AnartistturnedwebdeveloperfromVancouverBCIloveworkingonthefrontendandmakingbeautifuldesignscometolife'>An artist turned web-developer from Vancouver, BC. I love working on the front-end and making beautiful designs come to life. </span>
				<span className='Hello'>Hello.</span>
				<span className='IamAmyOulton'>I am Amy Oulton.</span>
			</div>
		</div>
	)
}