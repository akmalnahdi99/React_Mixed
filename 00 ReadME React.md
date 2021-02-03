[2021-01-30]
- I changed the Rental Dash to inlcude a way to notify about previous year payments


[2021-01-25]
- http://localhost:3000/landlord/appointmentdetails/11 pls check if the Reak Image for agent and his name are required, currently we put an image sample
- for tenant appointment pls remove slack library and center the Header of elements (All, Scheduled, Cancelled) using css or whatever you used previously
- how to display bills cards (with upload bill, upload recipt) shoule we show (all, or unpaid only or ???) pls explain

[2021-01-15]
- zero scrollbar :
https://stackoverflow.com/questions/64361996/react-router-scroll-page-to-the-top-after-transition

[2021-01-09]
- when doing HTML pls dont put <Link> inside another <Link> because <Link> is converted to <a > element, and in HTML <a> inside <a> is prevented.

[2021-01-08]
- akmal: inventoryOfArea layout fixed
- akmal: maintenance layout fixed
- akmal: offer layout fixed
- akmal: viewing layout fixed

[2021-01-07]
- for file InventoryOfArea pls check the small screen layout (text out of card)
- for the file of Development and production pls don't push this file when modify for development, this file is read directly in production.



[2021-01-06]
- add x button to every quick link button or any other design you find good;
- all charts are based on victory charts so documentations can be found here : https://formidable.com/open-source/victory/docs/victory-pie/

[2021-01-03]
- I deleted These packages : react-modal chart.js lightgallery  metismenu node-sass react-chartjs-2 react-chartjs-2 recharts react-vizgrammar
- autoprefixer is a library that rely on caniuse for adding prefixes to css to adapt multi browsers configurations.
- npx browserslist@latest --update-db



[2020-12-29]
- for local development pls relpace last line in Constants.js file with :
export const config = process.env.NODE_ENV === "development" ? prod : prod;

[2020-12-17]
- master merged all this branche edits
- landlord/notifications is notifications clickable

[2020-12-1]
- to qhairun : Pls delete non required images from src/assets/imgs there is around 12MB of images, pls also consider resizing the big images 
- to qhairun : pls review the file index.html and remove non required elements from it.
- for file invoive and invoice2 Please pass the difference as parameter like type='paid' then you set the className, as discussed previously for DashIconsBox
- for file BillsServiceCharge, I noticed that the path changed from '../../bills_component/Invoice' to './invoice' . if this was done because the element is shared then ok,
  but if this is done as a respond to the previous review then pls consider that I mentioned <Link path=""> only, because in web development the url of website should start form /something
  in react or any other development we have links for internal files, and we have links for the website itself. 

[2020-11-30]
- to qhairun : Pls delete non required images from src/assets/imgs there is around 12MB of images, pls also consider resizing the big images or reduce quality , 
- in Links use absolute path example: /landlord/page1 , not ../landlord/page1
- in file DashPropertyInfo I noticed that a new component created.  it is a copy of DashIconsBox called DashIconsProperty, the difference in components was the links, I modified the files to include the link as parameter, Please consider the fact of reusing existing Components effectively, more components means more files more complex project, and future modifications need to be applied on multiple files. Please consider this in future comonent and existing ones if any.
- for bills items like gas, gasitem, internet item, please review the naming of component look at the file internet item for example, try to use names like service or servicedetail ...

[2020-11-27]
- While development just commit the files into Development Branch ( pull any files first to update your repo), then push the files, no need to any merge

[2020-11-26]
- I did Create a new Branch from master branch (Development), since I noticed that there is a lot of files I deleted that still exists in the Branch Test-Environment
- For all Files Started with PropertyInfo they all can be merged in one file please look at BillsOf
- It is very important to look at the warnings that NPM is generating when you modify files, Please try to solve them befor any further commit make sure that you commit files, with no NPM warnings.


[2020-11-25]
- Please Create a new Branch from the master branch, no need to any pull requests I will do the merges daily
- Please Review maintainance list item file to see how it looks now, 
- Please Review OfferListItem to make it follow the exact flow of MaintenanceListItem, use status instead of color 
- Please review Bills File to see how we pass parameters to represent bill type
- Please repeat the Bills File With Files Start with PI_ and please change it to someThing more clear that PI

[2020-11-24]
- Please consider that all html you write will be delivered to end user in one compact app, so we need to reduce the redundant code, please refer to dashBills.js to see how we can use the map function to loop over  items and save space.

- All Images need an alt="Something" <img alt="" /> do not write (photo or image) in alt attribute use the title or anything unique

- Notice that NPM is showing a lot of warning pls fix them as possible


All files that are part of the project (static icons,  setting files, stylesheets except (cdn libraries like bootstrap or fontawsome) ) should go inside assets folder

All files that are dynamic and not part of the project go inside public folder ( like properties images, and others)



