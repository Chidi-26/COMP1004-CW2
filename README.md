COMP1004 Coursework 2 — People & Vehicle Search
A small client-side web app for looking up people and vehicles, and adding new vehicle records. Built with plain HTML, CSS and JavaScript (ES modules), with Supabase as the hosted Postgres backend.

Author: Chidi Ikwunze Repository: https://github.com/Chidi-26/COMP1004-CW2

What the app does
Page	File	Purpose
People search	index.html	Search the People table by driver name (partial match)
Vehicle search	vehicle_search.html	Search the Vehicles table by registration number (partial match)
Add a vehicle	add_a_vehicle.html	Insert a new row into the Vehicles table
All three pages share the same header, navigation bar, sidebar image and footer, and the same stylesheet, so the site has a consistent layout throughout.

Features implemented
People search — types a name into the search box and queries Supabase with ilike so partial, case-insensitive matches are returned. Each result is rendered into its own bordered div in the results area.
Vehicle search — same pattern, matching against VehicleID (the registration number).
Add a vehicle — collects registration, make, model, colour and owner, and inserts a row into Vehicles. A status message ("Vehicle added successfully" or "Error - cannot add vehicle") is written into the #message area.
Owner check — when the owner field changes, the app queries the People table to see whether that owner already exists. If they don't, an extra set of fields (Person ID, name, address, date of birth, licence number, licence expiry) is revealed so their details can be captured.
Responsive layout — a CSS grid gives the two-column main/sidebar layout, and a media query stacks the navigation links vertically on screens narrower than 500px.
Project structure
Comp1004-CW2/
├── index.html            # People search page
├── vehicle_search.html   # Vehicle search page
├── add_a_vehicle.html    # Add-a-vehicle form
├── CW2.css               # Shared stylesheet (grid layout + responsive rules)
├── Home.js               # People search logic
├── v-search.js           # Vehicle search logic
├── add_vehicle.js        # Insert logic + owner-exists check
├── supabaseClient.js     # Shared Supabase client export
├── SearchDate.js         # Early experiment with a raw REST call (unused)
├── PersonCW2.pdf         # Sidebar image (people page)
├── 2019-honda-civic.pdf  # Sidebar image (vehicle pages)
└── Users/supabase/       # Local Supabase CLI config
Database
Two tables in Supabase:

People — PersonID, Name, Address, DOB, LicenseNumber, LicenseExpiry
Vehicles — VehicleID (registration), Make, Model, Colour, OwnerID
OwnerID on a vehicle links it back to a person.

Running it
There is no build step and no dependencies to install — the Supabase client is imported straight from a CDN as an ES module.

Because the pages use <script type="module">, opening the HTML files directly from the filesystem will be blocked by the browser's CORS rules. Serve the folder over HTTP instead:

python3 -m http.server 8000
Then open http://localhost:8000/index.html in a browser.

The site is also set up to be published through GitHub Pages.

Notes and known limitations
The Supabase URL and anon key are hard-coded into each script. The anon key is the public, client-side key and is protected by row-level security rather than by being secret, but the three copies should ideally be replaced by the single shared client in supabaseClient.js.
Search results currently show only one field per record (name, or registration number) rather than the full row.
The extra owner fields on the add-vehicle page are shown and hidden, but the new person's details are not yet written to the People table.
Neither search handles the "no results" case with a message, and query errors from Supabase are not surfaced on the search pages.
The sidebar images are PDFs referenced from <img> tags, which most browsers will not render.
SearchDate.js is a leftover from an early attempt at calling the REST API directly and is not loaded by any page.
