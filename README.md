# Create A Password

## Description

This project creates a randomized password according to the chosen parameters. It allows one to make 
strong passwords with a character length between 8 and 128 that fall into some of the most common criteria required by sites making developing unique passwords simple. It utilizes a combination of JavaScript, CSS, and HTML to prompt for the user's desired parameters and displays the generated password in the secondary box. 

## Installation

This project is accessible as a deployed site. The current URL is https://fairleyv.github.io/CreatePassword/

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

    ### 1. The Initial Screen
    
    The initial screen will display a box in the center of the screen containing a secondary box with the words "Your Secure Password" within it. This is where your password will appear replacing the words "Your Secure Password". There is also a button with the words "Generate Password" inside of it. This button sits within the primary box and beneath the secondary box and is the button used to begin the password generating process. 

    ```md
    ![Display of screen when initially loading application](assets/images/screenshot.png)
    ```

    ### 2. Click the "Generate Password" Button

    To begin the process click on the red "Generate Password" Button with your left mouse button. This will create an alert at the top of your screen prompting you to set your parameters for your passwords. Follow these steps until you get to the final confirmation screen. 
    
    ```md
    ![An alert displayed at the top of the screen prompting a length for password](assets/images/screenshot.png)
    ```

    ### 3. Confirmation Screen

    Check to see if all of your desired parameters are accurate. If the displayed setting has "true" next to it, then that setting will be included in the password generation. If all desired parameters are accurate confirm the choices. Otherwise click "cancel". This will prompt another screen asking if you would like to try again. If you would like to try again then click "confirm". This will restart the process of setting your parameters. If you would not like to try again then click "cancel", and the alert will close leaving you at the initial screen again. 

    #### Confirmation Screen

    ```md
    ![An alert prompting a parameter confirmation](assets/images/screenshot.png)
    ```

    #### Try Again Screen

    ```md
    ![An alert prompting a response whether to try again](assets/images/screenshot.png)
    ```

    ### 4. Create Password
    
    Once the settings are confirmed, an alert will appear notifying you that your password is being generated. Once acknowledged an alert will appear with the words "Success", and your password will be displayed in the secondary box in place of the words "Your Secure Password". If you'd like a new password then clicking the "Generate Password" button and going through each of the above steps again will replace the previous password with a new password according to the new parameters chosen. 

    ```md
    ![An alert with the words "Success" and a password displayed in secondary box](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.