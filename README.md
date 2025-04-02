# GeoFenceMap
## TABLE OF CONTENTS
- [ABSTRACT](#ABSTRACT)
- [OBJECTIVES](#OBJECTIVES)
- [TECHNOLOGIES USED](#TECHNOLOGIES-USED)
- [SYSTEM ARCHITECTURE](#SYSTEM-ARCHITECTURE)
- [Feature](#feature)
- [Model Building](#modelbuilding)
- [Model Performance](#modelperformance)

## ABSTRACT
This project is a Geospatial Mapping and Analysis System developed for a company to facilitate Geofencing, Territorial Mapping, and Enforcement while enabling data-driven decision-making at the district, Local Government Area (LGA), and state levels.

The system integrates interactive mapping using Flask, Folium, and GeoJSON datasets to visualize Nigeria's states, LGAs, and districts. Users can dynamically filter and explore different administrative boundaries, ensuring efficient resource allocation, boundary enforcement, and detailed geospatial data analysis.

## OBJECTIVES
- Geofencing: Defining and monitoring administrative boundaries.
- Territorial Mapping: Visualization of districts, LGAs, and states for strategic planning.
- Enforcement: Supporting regulatory compliance and jurisdictional enforcement.
- Data Analysis: Driving insights at different geographical levels to optimize decision-making.

## TECHNOLOGIES USED
- Geofencing: A technology that uses GPS, RFID, or other geospatial data to create virtual boundaries around a real-world geographic area. It enables organizations to monitor, restrict, or trigger actions based on location-based rules.
- Territorial Mapping: The process of visually defining and segmenting geographical areas based on administrative or operational needs. In this project, it is used to map Nigerian states, LGAs, and districts for governance and enforcement purposes.
- Geospatial Data: Information that describes objects, events, or other features with a location on the Earth's surface. In this project, GeoJSON files store Nigeria’s geographical boundaries.
- State: The highest administrative division within Nigeria, consisting of multiple Local Government Areas (LGAs). Nigeria has 36 states and the Federal Capital Territory (FCT), each with its own government structure.
- Local Government Area (LGA): A subdivision of a state used for administrative purposes. Nigeria has 774 LGAs, each with a governing body responsible for local governance.
- District: sSmaller subdivisions within an LGA, often used for planning, governance, and data analysis at a more localized level.
- Flask: A lightweight Python web framework used to build the backend API that processes geospatial data and serves dynamic map updates.
- Folium: A Python library for interactive map visualization, which integrates with Leaflet.js to render geo-referenced data directly in a web application.
- GeoPandas: A Python library that extends Pandas to handle geospatial data, allowing operations such as spatial filtering, boundary calculations, and data merging.
- GeoJSON: A geospatial data format based on JSON, used to represent geographical features like states, LGAs, and districts. It stores location coordinates, properties, and shapes of administrative boundaries.
- Centroid: The geometric center of a shape. In this project, the centroid of a state or LGA is used to position the initial map view for that location.

## SYSTEM ARCHITECTURE
This project follows a three-layered architecture, integrating Flask for the backend, JavaScript and HTML for the frontend, and GeoPandas and Folium for geospatial visualization.

1. Backend: Flask API (Data Processing & Map Rendering)
The backend is powered by Flask, which handles:
- Loading and processing GeoJSON data (States, LGAs, Districts).
- Filtering administrative boundaries dynamically based on user input.
- Generating interactive maps using Folium and saving them as HTML.
- Serving API endpoints that allow querying for specific states, LGAs, or districts.

2. Frontend: HTML, JavaScript & Folium (User Interaction & Visualization)
The frontend consists of an HTML page with a dropdown-based UI, allowing users to:
- Select a state → Display the state with its LGAs.
- Select an LGA → Display the LGA with its districts.
- Select a district → Zoom into the district for detailed insights.

3. Data Processing & Geospatial Mapping
This project leverages GeoPandas and Folium to process spatial data and render interactive maps:
- GeoPandas: Reads and manipulates the GeoJSON dataset, extracting relevant state, LGA, and district boundaries.
- Folium: Converts the processed geospatial data into an interactive map.




