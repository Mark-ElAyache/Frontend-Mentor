import os
challenges = ["Junior", "Newbie"]

with open("index.html", "a") as file:
    file.write(
        '<!DOCTYPE html>\n'
        '<html lang="en">\n'
            '<head>\n'
                '<meta charset="UTF-8">\n'
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
                '<title>Frontend Showcase</title>\n'
                '<link rel="stylesheet" href="styles.css">\n'
                '<link rel="icon" href="images/favicon.ico">\n'
            '</head>\n'
            '<body>\n'
                f'<a class="logo" href="https://www.frontendmentor.io" target="_blank"><img src="images/frontend-mentor.svg" alt=""></a>\n'
                    '<h1>Challenges</h1>\n'
    )
    for challenge in challenges:
        folder_locations = os.listdir(f"./{challenge}")
        file.write(
                    f'<h2>{challenge} Challenges</h2>\n'                    
                    '<div class="container">\n')
        for folder_location in folder_locations:
            if "(D) " in folder_location:
                folder_title = folder_location[4:]
                completion_status = "Completed"
                css_style = "box-shadow: 0 7px hsl(120deg 80% 87%);"
                disable_hover = ""
                img_source = f"./{challenge.replace(' ', '%20')}/{folder_location.replace(' ', '%20')}/images/desktop.png"
            else:
                folder_title = folder_location
                completion_status = "Under Construction"
                css_style = "box-shadow: 0 7px hsl(2deg 81% 87%);"
                disable_hover = "pointer-events: none;"
                img_source = "./images/desktop.png"
            file.write(
                        f'<a href="https://mark-elayache.github.io/Frontend-Mentor/{challenge.replace(" ", "%20")}/{folder_location.replace(" ", "%20")}/index.html" target="_blank" style="{disable_hover}">\n'
                            '<div class="card">\n'
                                f'<h3>{folder_title}</h3>\n'
                                f'<img src="{img_source}" alt="desktop.png" style="{css_style}">\n'
                                '<div class="status">\n'
                                    f'<p><strong>Status:</strong> {completion_status}</p>\n'
                                    '<div class="go-arrow">></div>\n'
                                '</div>\n'
                            '</div>\n'
                        '</a>\n'
            )
        file.write('</div>\n')
    file.write(
                '<footer>\n'
                    '<div class="socials">\n'
                        '<a class="social-link" target="_blank" href="https://www.linkedin.com/in/mark-elayache"><img src="images/linkedin.svg" alt=""></a>\n'
                        '<a class="social-link" target="_blank" href="https://www.github.com/mark-elayache"><img src="images/github.svg" alt=""></a>\n'
                    '</div>\n'
                '</footer>\n'
            '</body>\n'
        '</html>\n'
    )