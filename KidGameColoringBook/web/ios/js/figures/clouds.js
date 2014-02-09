(function (win) {

	"use strict";
	/*global window, document, console, alert */

	win.allFigures = win.allFigures || {};

	win.allFigures.clouds = {
		svg:"<svg width='36px' height='24px' viewBox='0 0 36 24'><path d='m13,7q5-7 10,0 5,0 5,3c9-2 9,9 0,7q-10,5-20,0c-9,2-9-9 0-7q0-3 5-3'></path></svg>",
		figures: [
			{
				svg:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='822px' height='567px' viewBox='0 0 822 567' enable-background='new 0 0 822 567' xml:space='preserve'><rect x='0' y='0' width='822' height='567' fill='rgb(255,255,255)' /><title>Cloud coloring</title><desc>Vector coloring cloud. Author Lobaz Roman. Site www.abc-color.com</desc><path fill='rgb(255,255,255)' stroke='#000000' d='M650.2,222.3c-6.601,3.8-16.3,15.4-16.4,16.3c0-0.9,6.9-11.3,15.3-16.3 c-14.199-34.9-59.8-82.8-137.5-56c-4.8,5.8-16.399,12.2-19.699,12.9c3.1-0.8,13.399-7,18.1-12.4c-12.5-108.8-191.4-117.2-214.6-3 c1.2,3.4,4.8,13.7,14.7,20.4c-9.1-5-13.899-14.9-15.7-19c-61.6-13.4-115.1,20.5-130.7,53.4c5.2,3.7,19.3,16.2,23.1,27.3 c-6.2-12.1-21.3-25.8-24.8-27.6h-0.1c-0.1,0-0.2-0.1-0.2-0.1l0,0C27.7,151.1-60,383.4,118,387.7c13.2-1.601,28.5-11.8,29.9-13.9 c-1.3,2.101-15.7,12.7-28.6,14.5c16.6,32.2,88.2,93,169.1,34.5c6-5.7,7.3-16.6,6.6-19.6c0.8,3,0.9,13.2-5.2,19.5 C362.9,527.4,462.6,459,482.4,433.1c-7-8.5-5.5-18.699-4.7-20.3c-0.8,1.601-1.3,12.3,5.6,20.2c85,45.6,158.8-13.8,169.2-53.8 c-2.2-1.7-5.1-4.3-6.7-8.101c1.8,2.7,4.8,5.801,7.601,7.9C834.4,417.9,818,174.4,650.2,222.3z'/></svg>",
				id: 1183192078024149
			},
			{
				svg:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='822px' height='567px' viewBox='0 0 822 567' enable-background='new 0 0 822 567' xml:space='preserve'><rect x='0' y='0' width='822' height='567' fill='rgb(255,255,255)' /><path fill='rgb(255,255,255)' stroke='#000000' stroke-miterlimit='10' d='M721.7,278c6.6-7.4,10.3-15.8,10.3-24.6 c0-29.9-42.3-54.1-94.4-54.1c-3.199,0-6.3,0.1-9.399,0.3c-15.3-18.1-47.601-30.6-85-30.6c-10.601,0-20.8,1-30.3,2.9 c0.1-1,0.1-1.9,0.1-2.9c0-29.9-42.3-54.1-94.4-54.1c-52.1,0-94.399,24.2-94.399,54.1c0,1.6,0.1,3.1,0.399,4.6 c-11.699-3-24.6-4.6-38.1-4.6c-52.1,0-94.4,24.2-94.4,54.1c0,0.1,0,0.2,0,0.3c-3.1-0.2-6.3-0.3-9.5-0.3 c-52.1,0-94.4,24.2-94.4,54.1c0,0.5,0,0.9,0.1,1.3C50.3,284,22,305.6,22,331.4c0,29.899,38,54.1,85,54.1h598.6 c52.101,0,94.4-24.2,94.4-54.1C800,304.6,766.2,282.4,721.7,278z'/></svg>",
				id: 5607512576971203
			},
			{
				svg:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='822px' height='567px' viewBox='0 0 822 567' enable-background='new 0 0 822 567' xml:space='preserve'><rect x='0' y='0' width='822' height='567' fill='rgb(255,255,255)' /><path fill='rgb(255,255,255)' stroke='#000000' stroke-miterlimit='10' d='M741.3,413.3c-5.899,0-11.6,0.5-17,1.4 c10.9-9.7,17.8-22.3,18.601-36.5c1.899-33-30-61.8-71.301-64.2c-13.199-0.8-25.8,1.3-36.8,5.4c-6.3-23.801-30.2-42.5-60.399-46.7 c2.5-5.9,3.8-12.3,3.8-18.9c0-33.1-33.5-59.9-74.9-59.9c-0.5,0-1,0-1.5,0c-29.3-21.1-68.6-34-111.899-34 c-32.9,0-63.601,7.5-89.3,20.4c-5.5-8.9-16.1-14.9-28.3-14.9c-17.8,0-32.2,12.7-32.2,28.5c0,9.3,5.1,17.6,13,22.8 c-17.2,20-27.2,44-27.2,69.899c0,2.301,0.1,4.5,0.2,6.7c-0.1,0-0.2,0-0.2,0c-19.2,0-36.7,5.8-50,15.3 C165,302.4,152.4,298.9,139,298.9c-41.4,0-74.9,33.5-74.9,74.899c0,7.7,1.2,15.101,3.3,22.101c-27.2,7-46.8,26.699-46.8,50 c0,29.1,30.6,52.699,68.3,52.699h546.7c21,0,39.9-7.3,52.4-18.899c12,10.5,31.4,17.399,53.4,17.399c36.399,0,65.899-18.8,65.899-42 C807.3,431.9,777.8,413.3,741.3,413.3z'/></svg>",
				id: 26403037551790476
			},
			{
				svg:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='822px' height='567px' viewBox='0 0 822 567' enable-background='new 0 0 822 567' xml:space='preserve'><rect x='0' y='0' width='822' height='567' fill='rgb(255,255,255)' /><path fill='rgb(255,255,255)' stroke='#000000' stroke-miterlimit='10' d='M779.9,403.9C777.8,363.4,744.3,331.1,703.3,331.1h-14.2 c4.801-8,7.601-17.1,7.601-26.6c0-33.9-34.3-61.4-76.7-61.4c-11.6,0-22.5,2.1-32.4,5.7C578.7,169.5,480.1,107.1,359.7,107.1 c-126.2,0-228.6,68.7-228.6,153.4c0,7.2,0.8,14.4,2.2,21.3c-23.6,9-40.5,27.5-43.2,49.2h-0.4C47.3,331,13,365.3,13,407.7 c0,42.399,34.3,76.7,76.7,76.7h613.6c41,0,74.5-32.2,76.601-72.801c0.1-1.3,0.1-2.6,0.1-3.899C780,406.5,780,405.2,779.9,403.9z'/></svg>",
				id: 34990728623233736
			},
			{
				svg:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='822px' height='567px' viewBox='0 0 822 567' enable-background='new 0 0 822 567' xml:space='preserve'><rect x='0' y='0' width='822' height='567' fill='rgb(255,255,255)' /><title>Coloring cloud</title><desc>Vector coloring cloud</desc><path fill='rgb(255,255,255)' stroke='#000000' d='M677.7,348.6c0-37.3-18.4-70.6-46.8-91.3C611.1,153.3,519.8,75,410,75 c-63.9,0-121.5,26.5-162.4,69.3c-38.7-5.4-82.4,18.5-107.1,61.7c-31,54-21.1,117.4,21.6,142.6l0,0 c-7.2,10.801-11.3,23.4-11.3,37.301c0,37.399,30.1,67.5,67.5,67.5c8.1,0,16.2-1.301,23.4-4.101C283.1,495.8,342.9,525,410,525 c61.2,0,116.6-24.3,157.1-63.9C628.7,460.2,677.7,410.3,677.7,348.6z'/></svg>",
				id: 9060229214373976
			},
			{
				svg:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='822px' height='567px' viewBox='0 0 822 567' enable-background='new 0 0 822 567' xml:space='preserve'><rect x='0' y='0' width='822' height='567' fill='rgb(255,255,255)' /><path fill='rgb(255,255,255)' stroke='#000000' stroke-width='2' stroke-miterlimit='10' d='M720.9,331.9l-9.101-21.2 c-8.399-22-44.899-38.6-88.8-38.6c-3.3,0-6.5,0.1-9.7,0.3c-5.1-24.1-43.399-42.8-90-42.8c-3.399,0-6.7,0.1-10,0.3 c1.8-3.8,2.8-7.8,2.8-11.9c0-26.7-40.6-48.3-90.6-48.3c-5.7,0-16.3-2.3-16.3-3.9c0-26.7-40.601-48.3-90.601-48.3 c-49.6,0-89.8,21.2-90.5,47.5c-40.4,4.8-70.7,24.1-70.7,47.1c0,0.6,0,1.3,0.1,1.9c-37.7,5.8-65.3,24.4-65.3,46.4 c0,5.7,1.9,11.2,5.3,16.3c-42.2,4.1-74.1,23.8-74.1,47.5c0,17.899,18.2,33.5,45.3,41.8c-2.3,4.5-3.6,9.3-3.6,14.2 c0,26.7,36.5,48.3,81.5,48.3h574.2c50,0,90.601-21.6,90.601-48.3C811.5,353.5,770.9,331.9,720.9,331.9z'/><path d='M228.6,164.7c0,0,0,0.2,0.2,0.5c0.1,0.3,0.3,0.8,0.5,1.4c0.2,0.6,0.6,1.3,0.9,2.1c0.4,0.8,0.9,1.7,1.5,2.7 c0.5,1,1.3,2,2,3c0.4,0.5,0.8,1,1.2,1.6c0.2,0.3,0.4,0.5,0.6,0.8c0.2,0.3,0.5,0.5,0.7,0.8c0.5,0.5,1,1,1.5,1.6 c0.5,0.5,1.1,1,1.6,1.5c1.1,1,2.3,1.9,3.5,2.8c1.2,0.9,2.6,1.6,3.8,2.4c1.3,0.6,2.7,1.3,3.9,1.9c1.3,0.5,2.6,0.9,3.8,1.4 c0.6,0.2,1.2,0.4,1.8,0.5c0.6,0.1,1.2,0.3,1.7,0.4c1.1,0.3,2.1,0.5,3,0.6c0.9,0.1,1.7,0.2,2.4,0.3c1.3,0.2,2.1,0.3,2.1,0.3 s-0.8-0.1-2.1-0.3c-0.7-0.1-1.5-0.2-2.4-0.3c-0.9-0.1-1.9-0.3-3-0.6c-0.6-0.1-1.1-0.3-1.7-0.4c-0.6-0.1-1.2-0.2-1.8-0.5 c-1.2-0.4-2.5-0.9-3.9-1.3c-1.3-0.6-2.6-1.2-4-1.8c-1.3-0.8-2.6-1.5-3.9-2.3c-1.2-0.9-2.5-1.7-3.6-2.7c-0.6-0.5-1.1-1-1.7-1.5 c-0.5-0.5-1-1.1-1.5-1.6c-0.2-0.3-0.5-0.5-0.7-0.8c-0.2-0.3-0.4-0.5-0.7-0.8c-0.4-0.5-0.9-1.1-1.3-1.6c-0.7-1.1-1.5-2.1-2.1-3.1 s-1.1-1.9-1.5-2.7s-0.8-1.6-1-2.2c-0.3-0.6-0.5-1.1-0.6-1.5c-0.1-0.3-0.2-0.5-0.2-0.5L228.6,164.7z'/><path d='M410,166.3c0,0-0.1,0.2-0.4,0.4c-0.3,0.3-0.6,0.7-1.1,1.2c-1,1-2.5,2.4-4.3,4.1c-0.9,0.8-1.9,1.7-3,2.5 c-1.101,0.9-2.3,1.8-3.5,2.7c-1.2,0.9-2.601,1.8-3.9,2.7c-1.399,0.8-2.7,1.7-4.2,2.5c-1.399,0.8-2.8,1.6-4.3,2.2 c-0.7,0.3-1.5,0.7-2.2,1c-0.699,0.3-1.5,0.6-2.199,0.8c-0.7,0.3-1.4,0.5-2.101,0.8c-0.7,0.3-1.399,0.4-2.1,0.6 c-1.3,0.4-2.601,0.8-3.8,1c-1.2,0.2-2.301,0.4-3.301,0.6c-1,0.1-1.8,0.2-2.6,0.3c-1.4,0.1-2.2,0.2-2.2,0.2s0.8-0.1,2.2-0.3 c0.7-0.1,1.6-0.2,2.5-0.3c1-0.2,2.1-0.4,3.2-0.7c1.2-0.2,2.399-0.7,3.8-1.1c0.7-0.2,1.4-0.4,2-0.7c0.7-0.3,1.4-0.5,2.1-0.8 c0.7-0.3,1.4-0.5,2.101-0.9c0.7-0.3,1.399-0.7,2.1-1c1.5-0.7,2.8-1.5,4.3-2.3c1.4-0.8,2.7-1.7,4.101-2.6c1.3-0.9,2.6-1.8,3.8-2.7 s2.4-1.8,3.4-2.7c1.1-0.9,2-1.8,2.899-2.6c1.8-1.6,3.2-3.1,4.2-4.1s1.5-1.6,1.5-1.6L410,166.3z'/><path d='M157.5,213.6c0,0,5.4,0.3,13.5,1.3s18.8,2.7,29.3,5.3c1.3,0.3,2.6,0.7,3.9,1c1.3,0.4,2.6,0.7,3.9,1.1 c2.5,0.8,5,1.6,7.4,2.6c1.2,0.5,2.3,0.9,3.5,1.4c1.1,0.5,2.2,1,3.2,1.5c2.1,1,4,2.2,5.7,3.3c1.7,1.2,3.1,2.3,4.3,3.5 c0.6,0.5,1.1,1.2,1.6,1.7s0.9,1.1,1.2,1.6s0.7,0.9,0.9,1.3c0.2,0.4,0.4,0.8,0.5,1.1c0.3,0.6,0.4,0.9,0.4,0.9s-0.2-0.3-0.4-0.9 c-0.1-0.3-0.3-0.6-0.5-1c-0.2-0.4-0.5-0.8-0.9-1.3c-0.3-0.5-0.7-1-1.2-1.5s-0.9-1.1-1.6-1.7c-1.2-1.1-2.6-2.3-4.3-3.4 c-1.7-1.1-3.6-2.2-5.7-3.2c-1-0.5-2.1-1-3.2-1.5s-2.3-1-3.5-1.4c-2.4-0.9-4.9-1.7-7.4-2.5c-1.3-0.4-2.6-0.7-3.9-1.1 c-1.3-0.3-2.6-0.7-3.9-1c-10.5-2.5-21.2-4.1-29.3-5c-8.1-0.9-13.4-1.2-13.4-1.2L157.5,213.6z'/><path d='M98,276.2c0,0,0.1,0,0.4,0c0.3,0,0.7,0,1.2,0c0.3,0,0.6,0,0.9,0s0.7,0.1,1,0.1c0.7,0.1,1.5,0.1,2.4,0.3 c0.9,0.2,1.8,0.3,2.8,0.5c0.5,0.1,1,0.2,1.5,0.4c0.5,0.1,1,0.3,1.6,0.4c1.1,0.3,2.2,0.6,3.3,1s2.2,0.8,3.3,1.2s2.2,0.8,3.3,1.3 c1.1,0.5,2.1,1,3.1,1.5s2,0.9,2.9,1.4c0.9,0.5,1.7,1,2.5,1.4c3.1,1.8,5.1,2.899,5.1,2.899s-2.1-1.1-5.2-2.8 c-0.8-0.399-1.6-0.899-2.5-1.399c-0.9-0.4-1.9-0.8-2.9-1.3c-1-0.4-2.1-0.9-3.1-1.4s-2.2-0.8-3.3-1.2c-1.1-0.4-2.2-0.8-3.3-1.1 c-1.1-0.4-2.2-0.6-3.3-0.9c-0.5-0.1-1.1-0.3-1.6-0.4s-1-0.3-1.5-0.3c-1-0.2-1.9-0.3-2.8-0.5c-0.9-0.2-1.7-0.2-2.4-0.2 c-0.4,0-0.7-0.1-1-0.1c-0.3,0-0.6,0-0.8,0c-0.5,0-0.9,0-1.2,0c-0.3,0-0.4,0-0.4,0V276.2z'/><path d='M68.8,365.5c0,0,0.2,0.1,0.6,0.2c0.4,0.1,0.9,0.3,1.6,0.5c1.4,0.399,3.5,1,5.9,1.5c1.2,0.3,2.6,0.5,4,0.8s3,0.4,4.5,0.6 c1.6,0.101,3.2,0.4,4.9,0.4c1.7,0.1,3.3,0.2,5,0.2c0.8,0,1.7,0,2.5,0c0.8,0,1.7-0.101,2.5-0.101c1.7,0,3.3-0.199,4.9-0.399 c1.6-0.101,3.1-0.4,4.5-0.7c0.7-0.1,1.4-0.2,2.1-0.4c0.7-0.199,1.3-0.3,1.9-0.5c1.2-0.3,2.4-0.6,3.4-0.8c1-0.3,1.8-0.6,2.5-0.8 c1.4-0.5,2.2-0.7,2.2-0.7s-0.8,0.3-2.2,0.8c-0.7,0.2-1.6,0.5-2.5,0.9c-1,0.3-2.1,0.6-3.4,0.9c-0.6,0.199-1.3,0.3-1.9,0.5 c-0.7,0.1-1.4,0.3-2.1,0.399c-1.4,0.3-2.9,0.601-4.5,0.7c-1.6,0.2-3.2,0.4-4.9,0.5c-0.8,0.1-1.7,0.1-2.5,0.2c-0.8,0-1.7,0-2.5,0 c-1.7,0.1-3.4,0-5.1-0.101c-1.7,0-3.3-0.199-4.9-0.3c-1.6-0.2-3.1-0.3-4.6-0.6c-1.4-0.2-2.8-0.4-4.1-0.7c-2.5-0.5-4.6-1-6-1.4 c-0.7-0.199-1.3-0.399-1.7-0.5c-0.4-0.1-0.6-0.199-0.6-0.199L68.8,365.5z'/><path d='M513.6,230.4c0,0-1.5-0.2-4.1-0.4s-6.4-0.4-10.9-0.6c-9.1-0.2-21.199,0.1-33.199,2.1c-3,0.5-6,1.1-8.9,1.7 c-1.4,0.4-2.9,0.7-4.3,1.1c-1.4,0.4-2.8,0.8-4.2,1.2c-2.7,0.8-5.3,1.8-7.7,2.7c-2.399,1-4.6,2-6.7,3c-1,0.5-2,1-2.899,1.5 c-0.9,0.5-1.7,1-2.5,1.5s-1.5,1-2.2,1.4c-0.7,0.5-1.3,0.9-1.8,1.3c-1.101,0.8-1.9,1.5-2.4,1.9c-0.6,0.4-0.899,0.7-0.899,0.7 s0.3-0.2,0.8-0.7c0.6-0.4,1.399-1.1,2.399-1.9c0.5-0.4,1.101-0.8,1.801-1.3c0.6-0.5,1.399-1,2.199-1.4c0.801-0.5,1.601-1,2.5-1.5 c0.9-0.5,1.9-1,2.9-1.6c2-1,4.2-2.1,6.7-3.1c2.399-1,5-1.9,7.7-2.8c1.3-0.5,2.699-0.8,4.199-1.2c1.4-0.4,2.9-0.7,4.301-1.1 c2.899-0.7,5.899-1.3,8.899-1.8c12-2.1,24.2-2.6,33.3-2.4c9.101,0.1,15.2,0.8,15.2,0.8L513.6,230.4z'/><path d='M613.4,272.9c0,0-6.5,0.3-16.101,1.4c-2.399,0.3-5,0.6-7.8,1c-2.8,0.4-5.7,0.8-8.6,1.3c-3,0.5-6.101,1.1-9.2,1.7 c-1.601,0.3-3.101,0.7-4.7,1c-1.6,0.4-3.1,0.7-4.7,1.1c-3.1,0.8-6.3,1.7-9.3,2.7c-0.8,0.2-1.5,0.5-2.3,0.7 c-0.7,0.3-1.5,0.5-2.2,0.8c-1.5,0.5-2.9,1.101-4.3,1.601c-2.8,1.1-5.5,2.399-7.9,3.7c-1.2,0.6-2.399,1.399-3.5,2 c-1.1,0.699-2.1,1.399-3.2,2.1c-1,0.7-1.899,1.5-2.8,2.1c-0.8,0.7-1.6,1.5-2.3,2.101c-1.3,1.399-2.5,2.7-3.3,3.899 c-0.9,1.101-1.3,2.101-1.7,2.801c-0.4,0.699-0.5,1-0.5,1s0.2-0.4,0.5-1c0.4-0.7,0.8-1.7,1.7-2.801c0.8-1.199,1.899-2.5,3.2-4 c0.699-0.699,1.5-1.399,2.3-2.199c0.899-0.7,1.8-1.4,2.7-2.2c1-0.7,2.1-1.4,3.199-2.101c1.101-0.699,2.301-1.399,3.5-2 c2.5-1.3,5.101-2.6,7.9-3.699c1.4-0.601,2.8-1.2,4.3-1.7c0.7-0.3,1.5-0.5,2.2-0.8c0.8-0.2,1.5-0.5,2.3-0.8c3-1,6.101-1.9,9.3-2.8 c1.601-0.4,3.101-0.8,4.7-1.2c1.601-0.4,3.101-0.7,4.7-1.1c3.1-0.7,6.2-1.3,9.2-1.8s5.9-1,8.7-1.4c2.8-0.4,5.399-0.8,7.8-1.1 c9.7-1.2,16.2-1.6,16.2-1.6V272.9L613.4,272.9z'/><path d='M720.7,332.3c0,0-1.3,0-3.601,0c-2.3,0-5.6,0.101-9.5,0.4c-7.899,0.6-18.399,1.899-28.5,5c-1.3,0.399-2.5,0.8-3.699,1.2 c-1.2,0.5-2.5,0.899-3.601,1.399c-1.2,0.5-2.399,1-3.5,1.601c-0.6,0.3-1.1,0.6-1.7,0.8c-0.5,0.3-1.1,0.6-1.6,0.899 c-2.2,1.2-4.1,2.5-5.9,3.9c-0.899,0.7-1.699,1.4-2.5,2.1c-0.8,0.7-1.5,1.5-2.199,2.2c-1.301,1.5-2.5,2.9-3.301,4.2 c-1,1.3-1.5,2.6-2.1,3.6c-0.5,1-0.8,1.9-1,2.5c-0.2,0.601-0.4,0.9-0.4,0.9s0.101-0.3,0.301-0.9c0.199-0.6,0.5-1.399,1-2.5 c0.6-1,1.1-2.3,2-3.6c0.8-1.4,2-2.8,3.3-4.3c0.7-0.7,1.399-1.5,2.2-2.2c0.8-0.7,1.6-1.5,2.5-2.2c1.8-1.399,3.8-2.8,5.899-4 c0.5-0.3,1.101-0.6,1.601-0.899c0.6-0.301,1.1-0.601,1.699-0.9c1.101-0.6,2.301-1.1,3.5-1.6c1.2-0.5,2.4-1,3.7-1.5 c1.2-0.4,2.5-0.9,3.7-1.301c10.1-3.199,20.6-4.699,28.5-5.399s13.2-0.601,13.2-0.601V332.3L720.7,332.3z'/><path d='M379.1,429c0,0-2.899-0.7-8-2.3c-5-1.601-12.1-4.101-20.3-7.8c-8.2-3.801-17.5-8.801-26.5-15.601 c-2.2-1.7-4.5-3.5-6.6-5.5c-2.2-1.899-4.2-4-6.2-6.2c-4-4.399-7.5-9.3-10.3-14.699c-1.4-2.7-2.5-5.5-3.5-8.301l-0.7-2.1l-0.3-1.1 l-0.3-1.101l-0.5-2.2l-0.4-2.199c-1.1-5.801-1-11.7-0.4-17.301c0.6-5.6,1.9-10.899,3.5-15.8c1.6-4.899,3.5-9.399,5.5-13.399 c0.2-0.5,0.5-1,0.7-1.5c0.3-0.5,0.5-1,0.8-1.4c0.5-1,1-1.9,1.5-2.8c1-1.8,2-3.5,2.9-5c1-1.5,1.9-3,2.7-4.3 c0.899-1.301,1.7-2.5,2.399-3.601c1.5-2.2,2.7-3.8,3.5-5c0.801-1.1,1.301-1.7,1.301-1.7s-0.4,0.601-1.301,1.7 c-0.8,1.2-2.1,2.8-3.5,5c-0.699,1.101-1.6,2.3-2.399,3.601c-0.8,1.3-1.7,2.8-2.7,4.3c-0.9,1.6-1.9,3.3-2.9,5 c-0.5,0.899-1,1.8-1.5,2.8c-0.3,0.5-0.5,1-0.8,1.4c-0.2,0.5-0.5,1-0.7,1.5c-2,4-3.8,8.5-5.4,13.399c-1.6,4.9-2.8,10.2-3.4,15.8 c-0.6,5.601-0.6,11.4,0.5,17.2l0.4,2.2l0.5,2.2l0.3,1.1l0.3,1.101l0.7,2.1c1,2.8,2.2,5.6,3.5,8.2c2.8,5.3,6.3,10.2,10.3,14.5 c2,2.2,4.101,4.2,6.2,6.1c2.1,1.9,4.4,3.7,6.6,5.4c9,6.7,18.301,11.7,26.4,15.399c8.2,3.7,15.3,6.101,20.3,7.7 c5,1.601,7.9,2.2,7.9,2.2L379.1,429z'/></svg>",
				id: 7926180551294237
			}
		]
	}

}(window));
