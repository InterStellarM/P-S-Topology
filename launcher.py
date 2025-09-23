import webbrowser
import pathlib

# find the index.html file in the same directory as this script
path = pathlib.Path(__file__).parent / "index.html"
url = path.resolve().as_uri()

# open in default browser
webbrowser.open(url)