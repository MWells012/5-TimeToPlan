# 5-TimeToPlan

# Table of Contents
- [Acceptance-Criteria](#acceptance-criteria)
- [Expected-Behavior](#expected-behavior)
- [Usage](#usage)
- [Learnings](#learnings)
- [Mock-Up](#mock-up)


# Expected Bahavior

The expected behavior of the page is when it's opened up there is a title that reflects what day of the week it is along with the month and day. There are time slots from 8am to 7pm that you can add your own to-do things in. You have the option to click save on the right to locally store the data you put in the text area that will save and be there even when you refresh the page. To clear the text area all you need to do is delete the text and press save.

The page has a built in function to let you know what the past, present and future time blocks are as well. Past time blocks will be colored in light grey, the time block of the day you are currently in will be red and the future boxes will be green.

# Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

# Usage

The usage of this application is to have a website that allows a person to plan their day out per hour. You can add or delete things that you need to have on your to-do list to successfully complete your day. You can re-visit the page on your device at any time to update the list or see what is written in your current time blocks to-do list and where you are in regards to time of day in your hourly planned out list.

# Learnings

This last 2 weeks played largely into the material used for this assignment. We learned how to make a button save things locally but only saved when a certain part of the screen is clicked (the save button in this case). We also learned how to use moment which allowed us to write an if statement to program in the color blocks for past, present and future time blocks. We also learned how to use and implement moment to show the current date (whatever specifications you set it to have hours, minutes, date etc.).

# Mock-Up

link to the deployed site: https://mwells012.github.io/TimeToPlan/

The following image show the web application's appearance and functionality: