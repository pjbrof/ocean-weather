import requests
import json

with open('buoycams.json') as json_data:
  data = json.load(json_data)

for station in data:
  print(station)
  
  image = f"https://ndbc.noaa.gov/buoycam.php?station={station}"

  with open(f"{station}.jpeg", 'wb') as handle:
      response = requests.get(image, stream=True)

      if not response.ok:
          print(response)

      for block in response.iter_content(1024):
          if not block:
              break

          handle.write(block)