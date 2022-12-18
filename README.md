1. Create project's folder
 - Install @angular/cli

2. Create App as front-end
 - Add Header
 - Create Product Model
 - Create data.ts
 - Add sample products
 - Add image placeholders
 - Create Product Service
 - Create Home Component

3. Implement Search
 - Add method to Product Service
 - Add search route
 - Show search result in Home Component
 - Generate Search Component

4. Tags Bar
 - Create Tag Model
 - Add sample tags to data.ts
 - In Product service
     - Add get all tags method
     - Add get all products by tag method
     - Add tags route
 - Show tag result in Home Component
 - Generate Tags Component
 - Add to Home Component

5. Product Page
 - Add method to Product Service
 - Generate Product Page Component

6. Cart Page
 - Create CartItem Model
 - Create Cart Model
 - Generate Cart Service
 - Add Cart Button in Product Page
 - Generate Cart Page Component

7. Not Found! Page
 - Generate Component
 - Add To Pages
     - Home Page
     - Product Page
     - Cart Page

8. Connect To Backend
 - Create back-end folder
 - npm init
 - npm install typescript
 - Create tsconfig.json
 - Create .gitignore
 - Copy data.ts to backend/src
 - npm install express cors
 - Create server.ts
 - install @types
 - Add APIs
 - npm install nodemon ts-node --save-dev
 - Add urls.ts to front-end
 - Add HttpClient Module
 - Update Product Service

9. Login Page
 - Generate Component
 - Add to routes
 - Import Reactive Forms Module
 - Add Login API
 - Add jsonwebtoken
 - Generate User Service
 - Generate User model
 - Add User Subject
 - Add Login Method
 - Add User Urls
 - Generate IUserLogin interface
 - Add ngx-toastr
    - Import Module
    - Import BrowserAnimationsModule
    - Add styles in angular.json
 - Add Login to Header
 - Add Local Storage methods
 - Add Logout Method
 - Add Logout to Header

10. Make Components For Login Page
 - Input Container
 - Input Validation
 - Text Input
 - Default Button

11. Connect Login API To MongoDB
 - Moving APIs into routers
 - Install
     - mongoose
     - dotenv
     - bcryptjs
     - express-async-handler
 - Connect to MongoDB
 - Use MongoDB instead of data.ts in APIs

12. Register User
 - Add Register API
 - Add Register service method
 - Add Register to Header
 - Add Register Component

13. Loading! Animation
 - Add Image
 - Add Component
 - Add Service
 - Add Interceptor

14. Checkout Page
 - Create Order Model
 - Create Checkout Page Component
 - Add To Router
 - Add User to User Service
 - Add Cart to Cart Service
 - Create Order Items List Component

15. Adding Map To The Checkout Page
 - Add Leaflet npm package
 - Add @types/leaflet
 - Add styles to angular.json
 - Add AddressLatLng to Order Model
 - Create Map Component
 - Add to Checkout Page
 - Change app-map selector to map
 - Add Auth Guard

16. Save Order
 - Add Order Model
 - Add Order Status Enum
 - Add Auth Middleware
 - Add Order Router
 - Add Create API
 - Add Order URLs to urls.ts
 - Add Order Service
 - Add Create Method
 - Add Auth Interceptor

17. Payment Page
 - Generate Component
 - Add 'getOrderForCurrentUser' API
 - Add Order Service method
 - Connect Component to Service
 - Make the map component readonly

18. Adding Paypal
 - Generate Component
 - Add to Payment Page
 - Get Paypal test client Id
 - Add Paypal JS to index.html
 - Set up Paypal buttons
 - Add Pay API to order router

 19. Add Product Page
 - Generate Component
 - Add to Header
 - Connect to DB
 - Implement Visibility Only for ADMIN

 20. Add Profile Page
 - Generate Component
 - Add to Header

 21. Add Profile Edit Options
 - Generate Component
 - Add Button to Profile Page
 - Get User from Local Storage