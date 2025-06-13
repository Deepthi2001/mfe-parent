# Micro-Frontend Architecture: Parent-Child Setup with Single SPA

## Overview
This project follows a **Micro-Frontend** architecture using **Single SPA**. It consists of:

- **mfe-parent** (Parent Application): The main container that loads child micro-frontends.
- **mfe-navbar**, **mfe-main-child** (Child Applications): Independent micro-frontends dynamically loaded by the parent.

## Setup

### 1. Clone the Repository
Clone the **mfe-parent** repository to your local machine:
```bash
git clone https://github.com/your-username/mfe-parent.git
cd mfe-parent
```

### 2. Install Dependencies
For mfe-parent and children applications, install the dependencies:

```
# For mfe-parent
cd mfe-parent
npm install   # Or yarn install

# For mfe-navbar (child)
cd mfe-navbar
npm install   # Or yarn install

# For mfe-main-child (child)
cd mfe-main-child
npm install   # Or yarn install
```

3. Run the Applications
Start both the parent and child applications:

```
# For mfe-parent (parent application)
cd mfe-parent
npm start   # Or yarn start

# For mfe-navbar (child application)
cd mfe-navbar
npm start   # Or yarn start

# For mfe-main-child (child application)
cd mfe-main-child
npm start   # Or yarn start
```

Visit http://localhost:9000 to see the mfe-parent application, which will dynamically load the mfe-navbar and mfe-main-child micro-frontends.

