// grep 'id="g' static/img/kitetrickprogression.svg|cut -d '"' -f 2|while read i; do echo "'`sed -e '0,/'$i'/d' -e '/<\/g>/,$d' static/img/kitetrickprogression.svg|grep '</tspan'|sed 's/.*>\(.*\)<\/tspan.*/\1/'|sed -e 's/[ -°]//g' -e 's/è/e/'`': '#$i',"; done
//
// id value of rect(angle) for each trick in the SVG
const tricks = {
	'Turtle': {'id': 'g5401',
		'title': "Turtle [Backflip]",
		'text': "The TURTLE is a float in which the kite is positioned belly up, nose away, with the lines extending toward the pilot over the trailing edge. The kite must float in this position for at least two seconds. The kite should be oriented nose-up for both entry and exit. Compare FADE."
	},
	'Pancake': {'id': 'g5062',
		'title': "Pancake",
		'text': "The PANCAKE is a landing from a nose dive into a flare (belly down, nose away) on the ground. The kite begin by flying straight down and is flared at the last second to land belly down on the ground, where it must remain for at least two seconds. To be considered a clean landing, the nose of the kite should not hit the ground before the belly does."
	},
	'Axel': {'id': 'g4717',
		'title': "Axel",
		'text': "The AXEL is a 360° belly-down rotation. It begins with the kite in a STALL, nose-up. The kite then falls belly down, nose toward the pilot and rotates a full 360°. The kite should be oriented nose-up for both entry and exitor the best score, the AXEL should be low, flat, and in the center of the window."
	},
	'CoinToss': {'id': 'g6429',
		'title': "Coin Toss",
		'text': "The COIN TOSS is a ground maneuver in which the kite balances on one wingtip and then executes a HALF AXEL—popping up and rotating 180°—and comes to rest on the opposite wingtip, where it must remain for at least two seconds."
	},
	'Twist': {'id': 'g6087',
		'title': "Twist [Sleeping Beauty Launch]",
		'text': "The TWIST is a launch in which one line of the kite is pulled so that the kite pivots from a position on its back, nose toward pilot, with one wing usually closer to the pilot than the other) almost onto its belly and then into nose-up position as it rises off the ground and is flown straight up."
	},
	'Insane': {'id': 'g6777',
		'title': "Insane",
		'text': "The INSANE is a descending, corkscrewing wingtip rotation. The trick is initiated toward the top of the window, where the kite is snapped into a wingtip rotation and descends in a corkscrewing motion. The kite must complete at least three full rotations. The method and direction of the entry and exit do not matter."
	},
	'Fade': {'id': 'g7463',
		'title': "Fade",
		'text': "The FADE is a float in which the kite is positioned belly up, nose toward the pilot, with the lines extended toward the pilot over the leading edge. The kite must float in this position for at least two seconds. The method of entry and exit does not matter, but both should be clean. Compare TURTLE."
	},
	'RollingSusan': {'id': 'g7811',
		'title': "Rolling Susan [Snap Lazy]",
		'text': "The ROLLING SUSAN is a single 360° rotation entered from the TURTLE position. The lower wing is popped to knock the kite into a TURTLE (belly up, nose away), and the same line is again popped to perform the rotation. The trick must be entered and exited horizontally. Compare LAZY SUSAN."
	},
	'AxelCascade': {'id': 'g8849',
		'title': "Cascade [Axel Cascade]",
		'text': "The CASCADE is a series of reversing, descending HALF AXELS. The trick is entered from a horizontal line of flight, nose pointing straight right (3:00) or straight left (9:00).With each HALF AXEL, the kite alternates between the 3:00 and 9:00 positions, ideally pausing a moment in each position before the next reversing HALF AXEL. The kite must descend through the window, and the sequence must contain at least three HALF AXELS. Ideally the trick is initiated at the top of the window and descends all the way to the bottom, and the kite exits in a straight line, in the direction that the nose pointed last."
	},
	'Pinwheel': {'id': 'g10555',
		'title': "Pinwheel [Helicopter]",
		'text': "Typically executed in light wind, the PINWHEEL is a series of smooth, descending belly-down rotations begun near the top of the window. The entry is nose-up; the method and direction of exit do not matter."
	},
	'T2pointLanding': {'id': 'g9195',
		'title': "Two-Point Landing",
		'text': "The TWO-POINT LANDING is a landing on both wingtips at the same time. It is initiated with a snap STALL as closo the ground as possible, such that the kite does not hover or float down to the ground. The angle of approach does not matter. The kite must land on only the two wingtip points (not wingtips and spine, or the entire back of the sail). The kite must remain on its wingtips for at least two seconds before being relaunched."
	},
	'Stall': {'id': 'g8155',
		'title': "Stall [Stop]",
		'text': "The STALL is a snap of the kite that stops it with the nose pointing up. The kite must remain in the stalled position for at least two seconds. Longer STALLS earn higher scores. Ideally the kite should sit perfectly upright, with no lean or wobble to the left or right. The direction of entry and exit does not matter."
	},
	'T360': {'id': 'g7121',
		'title': "360",
		'text': "In the 360, the kite is flown in a 360° circle parallel to the ground."
	},
	'Rollingup': {'id': 'g9535',
		'title': "Rolling-up",
		'text': "The ROLLING-UP is a launch with the lines pre-wrapped around the kite so that it unrolls several times as it rises off the ground. The kite begins on the ground in flare position (belly down, nose away) and is launched as for a FADE launch (the nose is swept up and under the kite), but the wraps cause the kite to unroll several times as it rises off the ground. The kite should unroll at least three times. For Tricks Party ballet, this trick may be done only as the first element of the performance."
	},
	'Refueling': {'id': 'g9875',
		'title': "Refueling [Docking]",
		'text': "REFUELING is a pair maneuver in which the follower docks a kite inside the lines of the leader’s kite and the two kites fly as a single entity. The direction of entry does not matter. Smooth entry while both kites are moving forward will earn a higher score than entry while one kite is stalled."
	},
	'Doubleaxel': {'id': 'g8505',
		'title': "Double Axel",
		'text': "The DOUBLE AXEL is an AXEL in which the kite makes two complete rotations. It is not two separate AXELS flowne after another. As in the single AXEL, the kite should be oriented nose-up for both entry and exit. The transition between rotations should be imperceptible, and the kite should not lose altitude."
	},
	'T540': {'id': 'g11253',
		'title': "540",
		'text': "The 540 is a single 540° belly-down rotation initiated from a flare (belly down, nose away) that is entered fro vertical line of flight. The kite is flown straight down, flared, and rotated on its belly a full 540°, ending with the nose toward the pilot. The rotation should be as flat as possible, with no change in altitude. The trick is exited nose-up. Compare SLOT MACHINE."
	},
	'LazySusan': {'id': 'g11603',
		'title': "Lazy Susan",
		'text': "The LAZY SUSAN is a single 360° rotation entered from the TURTLE position. The trick begins with a TURTLE (bellp, nose away from the pilot), from which the kite rotates 360° with the lines remaining over the trailing edge, during the entire rotation. The trick must be entered and exited nose-up. Compare ROLLING SUSAN."
	},
	'Flapjack': {'id': 'g11953',
		'title': "Flapjack",
		'text': "The FLAPJACK is a LAZY SUSAN performed directly from a ground launch and ending in a TWO-POINT LANDINGhe kite is launched from its two wingtips directly into a TURTLE (belly up, nose away), rotated 360°, and immediately brought back down into a TWO-POINT LANDING. Compare KOMBO."
	},
	'FlicFlac': {'id': 'g10901',
		'title': "Flic-Flac",
		'text': "The FLIC-FLAC is a series of alternating flares and FADES. The kite begins the trick by flying straight down. The kite is flared (belly down, nose away), then pulled back into a FADE (belly up, nose toward the pilot). The sequence—flare plus FADE—must be performed at least three times. The ideal exit is to flare the kite halfwaytop with nose pointing straight down, and then fly out in that direction."
	},
	'Kombo': {'id': 'g12303',
		'title': "Kombo",
		'text': "The KOMBO is a ROLLING SUSAN performed near the ground, directly into a TWO-POINT LANDING. The method and direction of entry do not matter. For the best score, both wingtips must touch down at the same time at the end of the trick. The closer to the ground that this trick is performed, the better. Compare FLAPJACK."
	},
	'YoYo': {'id': 'g12649',
		'title': "Yo-Yo",
		'text': "The YO-YO is a simple roll and unroll of the lines around the kite. The kite is rotated on the pitch axis 360° s that the lines become fully wrapped around it, and then it is unrolled. The trick may be entered either nose-up or nose-down, but the nose orientation must be the same for both the roll and the unroll. No other maneuvers may be performed while the kite is rolled up; before the unroll, however, the kite may fly a short distance in the direction the nose is pointed."
	},
	'Backspin': {'id': 'g15749',
		'title': "Backspin",
		'text': "The BACKSPIN is a series of 360° rotations entered from the FADE position. The trick begins with a FADE (belly up, nose toward the pilot), which may be entered from a flare-to-FADE move, fractured AXEL, or FADE launch, but not in combination with any other trick (e.g., entering from a JACOB'S LADDER). From the FADE, the kite rotate, with the lines remaining over the upper leading edges throughout. The kite must complete three full rotations; the method and direction of exit do not matter. Compare MULTILAZY."
	},
	'SlotMachine': {'id': 'g13683',
		'title': "Slot Machine",
		'text': "The SLOT MACHINE is a single 360° belly-down rotation initiated from a flare (belly down, nose away) that is entered from a horizontal line of flight. From a horizontal position (nose pointing left or right), the kite is flared and then rotated on its belly a full 360°. The kite should exit the rotation in the same direction (left or right) that entered. Compare 540."
	},
	'DeadLaunch': {'id': 'g10215',
		'title': "Dead Launch",
		'text': "The DEAD LAUNCH is a launch that begins with the kite on the ground, belly down and nose toward the pilot. The kite is pulled toward the pilot so that it rises off the ground and launches straight up."
	},
	'InsaneRL': {'id': 'g14029',
		'title': "Insane (Right-Left)",
		'text': "The INSANE (RIGHT-LEFT) is a reversing INSANE. As the first rotation ends, the opposite line is pulled to perforn INSANE rotation in the other direction. This sequence must be performed at least three times. The trick differ from a ROLLING CASCADE in that a full INSANE rotation (not a half INSANE) is performed on each repetition."
	},
	'K2000': {'id': 'g15404',
		'title': "K2000 [Superstart]",
		'text': "The K2000 is a landing to position the kite on its leading edge with the back facing the pilot and the lines coming up over the trailing edge, followed by a half LAZY SUSAN and a TWO-POINT LANDING. From the initial landing, the lower wing is pulled to launch the kite into a LAZY SUSAN. Halfway through the LAZY SUSAN rotation, the wingtips are pulled down into a TWO-POINT LANDING. The initial landing is an integral part of this trick, and the time between the landing and initiation of the rotation should be minimal."
	},
	'Multilazy': {'id': 'g3336',
		'title': "Multilazy",
		'text': "The MULTILAZY is a series of LAZY SUSAN rotations (360° entered from the TURTLE position). The trick may entered either nose-up (as in a LAZY SUSAN) or horizontally (as in a ROLLING SUSAN). The trick is exited nose-up. Compare BACKSPIN."
	},
	'Comete': {'id': 'g16779',
		'title': "Comète",
		'text': "The COMÈTE is a tumbling trick in which the kite rotates in a single direction (clockwise or counterclockwise). In each rotation, the kite passes through roughly four positions: (1) belly down, nose away (flare); (2) nose pointing down and slightly to one side (approximately 7:00 for clockwise rotation, 5:00 for counterclockwise); (3) belly up, nose away (TURTLE); (4) nose pointing left or right (approximately 3:00 for clockwise rotation, 9:0or counterclockwise). This series of four positions constitutes one rotation. The method and direction of entry and exit do not matter. Compare TORPILLE."
	},
	'JacobsLadder': {'id': 'g14373',
		'title': "Jacob’s Ladder [Ours des Prairies]",
		'text': "The JACOB’S LADDER is a continuous series of transitions between a half BACKSPIN rotation and a half LAZUSAN. Each “rung” of the ladder consists of one set of the two alternating rotations. The direction of the rotations do not matter. The trick is entered from either a FADE or a TURTLE. If it is entered from a FADE (belly up, nose toward the pilot), the kite is rotated approximately 180° so that it is belly up, nose away as in a TURTLE, but with the lines still over the leading edges and coming from under the kite. The kite is then rolled on the pitch axis so that the nose swings down and around a full 360°, into a true TURTLE. The kite is then rotated approximately 180°, so that it is belly up, nose toward the pilot as in a FADE, but with the lines still over thrailing edge and coming from underneath. Finally the kite is rolled again on the pitch axis so that the nose, wings up and around a full 360°, into a true FADE. This entire sequence constitutes one full rung of JACOB’S LADDER. (If the trick is entered from a TURTLE, it starts with a half LAZY SUSAN and the alternating sequence continues as just described.) The kite must complete three full rungs of the ladder. The smoothness of the transitions between positions is crucial to the quality of the trick. The method and direction of entry and exit dot matter."
	},
	'Lewis': {'id': 'g15059',
		'title': "Lewis",
		'text': "The LEWIS is a LAZY SUSAN performed while the kite is fully wrapped in a YO-YO. The trick must be entered and exited nose-up. The kite is flown straight up, leaned back and then forward, and then popped to roll the lines up for a YO-YO. The kite is then immediately thrown into a TURTLE (belly up, nose away) for a LAZY SUSAN rotation single rotation is completed, and the kite is pulled and unrolled. Compare YO-YO MULTILAZY."
	},
	'Torpille': {'id': 'g16095',
		'title': "Torpille",
		'text': "The TORPILLE is a tumbling trick similar to the COMÈTE but more smoothly flowing. It begins near the top of the window with a hard HALF AXEL pop to knock the kite onto its back, followed by an opposite pop to bring the kitnto its belly, then another pop to bring it onto its back, and so on. The kite tumbles from back to belly as in descends. Many newer kites are more suited to performing the related COMÈTE than the TORPILLE. One video example of the TORPILLE can be found at www.r-sky.com/video."
	},
	'RollingCascade': {'id': 'g14719',
		'title': "Rolling Cascade",
		'text': "A combination of the INSANE and the CASCADE, the ROLLING CASCADE is a series of reversing half INSANE rotations. The trick begins with an INSANE, but the kite is pulled out of the rotation halfway through, and an INSANE rotation in the opposite direction is initiated. The sequence is repeated back and forth in alternating directions. The method and direction of entry do not matter. For the exit, however, a horizontal orientation, nose pointing left or right) is generally considered best."
	},
	'WapDooWap': {'id': 'g4369',
		'title': "Wap-Doo-Wap",
		'text': "The WAP-DOO-WAP is a single 360° or 540° rotation initiated from an overrotated flare. The kite is flared 360° of the pitch axis so that the belly is up and the nose points toward the pilot but the lines are now underneath the kite almost in a YO-YO). Before fully entering the YO-YO, the kite is spun either 360° or 540°. The kite should exit the trick vertically—nose-down for a 360° rotation, nose-up for a 540° rotation."
	},
	'YoYoTakeoff': {'id': 'g16435',
		'title': "Yo-Yo Takeoff",
		'text': "The YO-YO TAKEOFF is a launch from the ground directly into a YO-YO. From its two wingtips on the ground, the kite is popped up and pitched backward 360° so that it rolls up into a full YO-YO. The kite climbs 5 to 10 meter15 to 30 feet) and then is unrolled, nose pointing up."
	},
	'TazMachine': {'id': 'g3683',
		'title': 'TazMachine',
		'text': "No description"
	},
	'BackspinCascade': {'id': 'g17811',
		'title': "Backspin Cascade",
		'text': "The BACKSPIN CASCADE is a BACKSPIN in which each rotation reverses direction. The trick begins with a FADE (belly up, nose toward the pilot) that is entered the same as for the BACKSPIN (see the BACKSPIN for details); then the kite alternates rotating in one direction and then the other. The kite must complete at least three full reversing rotations. The method and direction of exit do not matter."
	},
	'CrazyCopter': {'id': 'g19535',
		'title': "Crazy Copter",
		'text': "The CRAZY COPTER is a single 360° rotation, executed generally near the top of the window. The kite enters the trick by flying straight up. The nose of the kite is pulled forward and rotated approximately 270° on the pitch axis so that the kite is belly up and nose away, with the nose through the flying lines. The kite is then rotate 360° and flies straight up to exit."
	},
	'YoYoMultilazy': {'id': 'g18515',
		'title': "Yo-Yo Multilazy",
		'text': "The YO-YO MULTILAZY is a MULTILAZY performed while the kite is fully wrapped in a YO-YO. It is exactly like the LEWIS, but with multiple LAZY SUSANS instead of just one. See the LEWIS for details."
	},
	'Cynique': {'id': 'g18855',
		'title': 'Cynique',
		'text': "No description"
	},
	'Ladole': {'id': 'g17126',
		'title': 'Ladole',
		'text': "No description"
	},
	'Multislot': {'id': 'g17467',
		'title': 'MultiSlot',
		'text': "No description"
	},
	'YoFade': {'id': 'g17829',
		'title': 'YoFade',
		'text': "No description"
	},
	'Spike': {'id': 'g12989',
		'title': "Spike [Tip Stab]",
		'text': "In the SPIKE, one wingtip of the kite is driven decisively into the ground, where it must be held for at least tweconds. The trick may be entered from either a ground pass or descent at any angle."
	},
	'Slide': {'id': 'g13333',
		'title': "Slide [Sideway]",
		'text': "In the SLIDE, the kite travels horizontally while the nose points straight up. The line of travel should be as straight as possible, with no altitude gained or lost, and no wobble or lean in the kite’s orientation. The kite should slide in the same direction for at least three seconds. The method and direction of entry and exit are not important. A SLIDE is considered excellent when it is long and the pilot does not move sideways or moves only a little. SLIDES performed close to the ground generally receive higher scores for risk factor (mainly because it’s easier to spot problems in the line of travel near the ground)."
	},
	'HalfAxel': {'id': 'g5743',
		'title': "Half Axel [Kick Turn]",
		'text': "Essentially half of an AXEL, the HALF AXEL is a maneuver that reverses the kite’s direction of flight. The kite begins flying horizontally in either direction, then falls onto its belly, turns nose away from the pilot, and rotates 180°. The kite is then snapped back into flight with the nose pointing exactly opposite the initial direction and should exit in a straight line. The direction of flight (left or right) and the height at which the trick is performed do not matter."
	},
}

var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
	/*
	if (Modernizr.touch) {
		$('#mouse').remove();
		$('#touch_event').replaceWith('The first tap will show the tooltip. The second tap, while the tooltip is visible, will follow the link as usual.');
		// don't show or hide qtip automatically
		shared.show = false;
		shared.hide = false;
		$('area, [id^="g"]').bind('touchstart', function(e) {
			e.preventDefault();
			var tooltip = $(this).qtip('api').elements.tooltip;
			if (tooltip === undefined || !tooltip.is(':visible')) {
				// add a close button
				$(this).qtip('api').set('content.title.button', true);
				$(this).qtip('show');
			} else {
				$(this).qtip('hide');
				// follow link if any
				var href = $(this).attr('href') || $(this).parent('a').attr('xlink:href'); // try parent a in svg
				if (href !== undefined) location.href = href;
			}
		});
	}
	*/

	// search for and highlight a trick
	document.getElementById('search_box').addEventListener('change', function(e) {
		const elem = `#${tricks[e.currentTarget.value].id} rect`;
		const rect = document.querySelector(elem);

		// highlight trick box
		const oldFill = rect.getAttribute('fill');
		const oldStroke = rect.getAttribute('stroke');
		rect.setAttribute('fill', '#ff0000');
		rect.setAttribute('stroke', '#ff0000');
		// highlight for 1.5 second and return to normal
		setTimeout(function() {
			rect.setAttribute('fill', oldFill);
			rect.setAttribute('stroke', oldStroke);
		}, 1500);
		//
	});

	// add popover content to rect elem svg
	var elem;
	for (let t in tricks) {
		elem = document.getElementById(tricks[t].id);
		elem.dataset['bsTitle'] = tricks[t].title;
		elem.dataset['bsContent'] = tricks[t].text;
		elem.dataset['bsPlacement'] = 'right';
		elem.dataset['bsToggle'] = 'popover';
		elem.dataset['bsTrigger'] = 'hover';
	}

	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
});
