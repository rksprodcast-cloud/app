# JD NEXUS Real Estate Website - API Contracts & Integration Plan

## Project Overview
Professional real estate website for JD NEXUS by JDevelopers showcasing a premium residential project in BadaRahunathpur, Bhubaneswar.

## Current Implementation Status
✅ **Frontend Complete** - Fully functional with mock data

## Frontend Structure

### Pages/Sections
1. **Header** - Sticky navigation with smooth scroll
2. **Hero Section** - Full-screen banner with project images
3. **About Section** - Project description and highlights
4. **Apartments Section** - 2 BHK & 3 BHK configurations
5. **Amenities Section** - 12 premium amenities with icons
6. **Gallery Section** - 4 project images with lightbox
7. **Contact Section** - Enquiry form + contact details + WhatsApp
8. **Footer** - Company info and quick links

### Mock Data Location
- **File**: `/app/frontend/src/data/mock.js`
- Contains: Project details, apartments, amenities, images, contact info

### Features Implemented (Frontend Only)
- ✅ Smooth scrolling navigation
- ✅ Contact form (toast notification on submit)
- ✅ WhatsApp integration (opens WhatsApp with pre-filled message)
- ✅ Phone call links
- ✅ Image gallery with lightbox
- ✅ Responsive design (mobile & desktop)
- ✅ Hover animations and transitions
- ✅ Form validation

---

## Backend Integration Plan

### Database Schema

#### Collection: `enquiries`
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  phone: String (required),
  message: String,
  apartmentInterest: String (optional - "2 BHK" or "3 BHK"),
  createdAt: DateTime (default: now),
  status: String (default: "new") // "new", "contacted", "closed"
}
```

#### Collection: `projects` (Optional - for future expansion)
```javascript
{
  _id: ObjectId,
  name: String,
  location: String,
  apartments: Array,
  amenities: Array,
  images: Array,
  isActive: Boolean
}
```

---

## API Endpoints to Implement

### 1. Submit Enquiry
**Endpoint**: `POST /api/enquiries`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Interested in 3 BHK",
  "apartmentInterest": "3 BHK"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Enquiry submitted successfully",
  "data": {
    "id": "enquiry_id",
    "createdAt": "2025-01-01T12:00:00Z"
  }
}
```

**Frontend Changes Required**:
- Update `/app/frontend/src/components/Contact.jsx`
- Replace mock submission with API call to `${API}/enquiries`
- Handle loading state and error messages

---

### 2. Get All Enquiries (Admin - Optional)
**Endpoint**: `GET /api/enquiries`

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "9876543210",
      "message": "Interested in 3 BHK",
      "apartmentInterest": "3 BHK",
      "status": "new",
      "createdAt": "2025-01-01T12:00:00Z"
    }
  ]
}
```

**Note**: This endpoint is for future admin panel integration

---

## Frontend-Backend Integration Steps

### Step 1: Remove Mock Data
- Keep mock.js for static content (project info, amenities, apartments)
- Only dynamic data (enquiries) will come from backend

### Step 2: Update Contact Component
```javascript
// Current (Mock):
const handleSubmit = (e) => {
  e.preventDefault();
  toast({ title: "Enquiry Submitted!", ... });
  setFormData({ ... });
};

// Updated (Backend Integration):
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    const response = await axios.post(`${API}/enquiries`, formData);
    toast({ 
      title: "Enquiry Submitted!", 
      description: response.data.message 
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
    toast({ 
      title: "Error", 
      description: "Failed to submit enquiry. Please try again.",
      variant: "destructive"
    });
  } finally {
    setIsLoading(false);
  }
};
```

### Step 3: Add Loading State
- Show spinner/disable button while submitting
- Prevent double submissions

### Step 4: Backend Implementation
```python
# /app/backend/server.py

from pydantic import BaseModel, EmailStr
from datetime import datetime

class EnquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str = ""
    apartmentInterest: str = ""

class Enquiry(EnquiryCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"

@api_router.post("/enquiries", response_model=dict)
async def create_enquiry(enquiry: EnquiryCreate):
    enquiry_obj = Enquiry(**enquiry.dict())
    result = await db.enquiries.insert_one(enquiry_obj.dict())
    
    return {
        "success": True,
        "message": "Enquiry submitted successfully",
        "data": {
            "id": enquiry_obj.id,
            "createdAt": enquiry_obj.createdAt
        }
    }

@api_router.get("/enquiries", response_model=list)
async def get_enquiries():
    enquiries = await db.enquiries.find().sort("createdAt", -1).to_list(1000)
    return [Enquiry(**enquiry) for enquiry in enquiries]
```

---

## Static vs Dynamic Content

### Static (Stays in mock.js):
- Project name, company name
- Location, contact number, email
- Apartment configurations
- Amenities list
- Project images
- "About" content

### Dynamic (Backend):
- Contact form submissions
- Enquiries database

---

## Testing Checklist

### Backend Testing:
- [ ] POST /api/enquiries - Valid data
- [ ] POST /api/enquiries - Invalid email
- [ ] POST /api/enquiries - Missing required fields
- [ ] GET /api/enquiries - Returns all enquiries
- [ ] Database - Check enquiry is saved correctly

### Frontend Testing:
- [ ] Form submission - Success case
- [ ] Form submission - Error handling
- [ ] Form validation - Empty fields
- [ ] Form validation - Invalid email
- [ ] Loading state - Button disabled while submitting
- [ ] Toast notifications - Success and error messages
- [ ] WhatsApp button - Opens correct URL with message
- [ ] Phone links - Initiates call correctly

### Integration Testing:
- [ ] End-to-end form submission flow
- [ ] Network error handling
- [ ] Response time check

---

## Future Enhancements (Not in current scope)

1. **Admin Panel**
   - View all enquiries
   - Mark enquiries as contacted/closed
   - Export enquiries to CSV

2. **Email Notifications**
   - Send email to admin on new enquiry
   - Auto-reply email to user

3. **Analytics**
   - Track page visits
   - Track button clicks
   - Form conversion rate

4. **CMS Integration**
   - Edit project details from admin panel
   - Upload/manage images
   - Update amenities

---

## Notes
- All project images are hosted on customer-assets.emergentagent.com
- WhatsApp integration uses +91 country code
- Contact form uses Sonner for toast notifications
- Website is fully responsive (mobile-first design)
- No authentication required for current implementation
