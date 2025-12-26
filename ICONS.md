# Icon Reference - Lucide React

## Currently Used Icons

### Navbar
```javascript
import { Menu, X, Moon, Sun } from 'lucide-react';
```
- `Menu` - Hamburger menu icon
- `X` - Close icon
- `Moon` - Dark mode icon
- `Sun` - Light mode icon

### Hero
```javascript
import { ArrowRight } from 'lucide-react';
```
- `ArrowRight` - CTA button arrow

### Services
```javascript
import {
  Briefcase,      // Executive Assistance
  FileText,       // Back Office Support
  Headphones,     // Customer Service
  Target,         // Lead Generation
  Database,       // Data Processing
  Settings,       // Technical Support
} from 'lucide-react';
```

### Why Choose Us
```javascript
import { 
  Shield,         // Trusted & Reliable
  Zap,           // Fast & Efficient
  Users,         // Dedicated Team
  TrendingUp,    // Scalable Solutions
} from 'lucide-react';
```

### Contact
```javascript
import { Mail, Phone, MapPin, Send } from 'lucide-react';
```
- `Mail` - Email icon
- `Phone` - Phone icon
- `MapPin` - Location icon
- `Send` - Submit button icon

### Footer
```javascript
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
```
- `Facebook` - Facebook social icon
- `Twitter` - Twitter social icon
- `Linkedin` - LinkedIn social icon
- `Mail` - Email contact icon

## How to Use Icons

### Basic Usage
```jsx
import { Heart } from 'lucide-react';

<Heart className="w-6 h-6 text-red-500" />
```

### With Custom Styling
```jsx
<Heart 
  className="w-6 h-6 text-red-500 hover:text-red-700 transition-colors" 
/>
```

### With Custom Size
```jsx
<Heart size={24} />              // 24px
<Heart className="h-6 w-6" />    // Tailwind classes
```

### With Color
```jsx
<Heart color="#ff0000" />                    // Direct color
<Heart className="text-teal-600" />         // Tailwind color
```

### With Stroke Width
```jsx
<Heart strokeWidth={1.5} />      // Thinner
<Heart strokeWidth={3} />        // Thicker
```

## Popular Alternative Icons

### Business & Office
```javascript
import {
  Building,        // Office building
  Calendar,        // Calendar/scheduling
  Clock,          // Time management
  Laptop,         // Technology
  Globe,          // Global/international
  Award,          // Achievement/quality
  CheckCircle,    // Completed/verified
  Star,           // Rating/favorite
  TrendingUp,     // Growth/success
  BarChart,       // Analytics/metrics
} from 'lucide-react';
```

### Communication
```javascript
import {
  MessageCircle,  // Chat/messaging
  Phone,          // Phone call
  Mail,           // Email
  Send,           // Send message
  Inbox,          // Inbox/messages
  AtSign,         // Email/@
} from 'lucide-react';
```

### Technology
```javascript
import {
  Code,           // Programming
  Terminal,       // Command line
  Cpu,            // Processing
  HardDrive,      // Storage
  Wifi,           // Network
  Cloud,          // Cloud services
  Lock,           // Security
  Shield,         // Protection
} from 'lucide-react';
```

### User & Team
```javascript
import {
  User,           // Single user
  Users,          // Multiple users/team
  UserPlus,       // Add user
  Heart,          // Favorite/like
  ThumbsUp,       // Approval
  Smile,          // Happy/satisfaction
} from 'lucide-react';
```

### Actions
```javascript
import {
  Plus,           // Add
  Minus,          // Remove
  Edit,           // Edit
  Trash,          // Delete
  Download,       // Download
  Upload,         // Upload
  Search,         // Search
  Filter,         // Filter
  RefreshCw,      // Refresh/reload
  Settings,       // Settings/configure
} from 'lucide-react';
```

### Navigation
```javascript
import {
  ArrowRight,     // Next/forward
  ArrowLeft,      // Back/previous
  ChevronDown,    // Dropdown
  ChevronUp,      // Collapse
  Menu,           // Hamburger menu
  X,              // Close
  Home,           // Home
  ExternalLink,   // External link
} from 'lucide-react';
```

### Status & Notifications
```javascript
import {
  Check,          // Success
  X,              // Error
  AlertCircle,    // Warning
  Info,           // Information
  Bell,           // Notifications
  AlertTriangle,  // Alert
} from 'lucide-react';
```

## Adding New Icons

1. Browse icons at: https://lucide.dev
2. Import the icon:
   ```javascript
   import { IconName } from 'lucide-react';
   ```
3. Use in component:
   ```jsx
   <IconName className="w-6 h-6" />
   ```

## Icon Sizes Reference

```jsx
<Icon className="w-4 h-4" />   // 16px (small)
<Icon className="w-5 h-5" />   // 20px
<Icon className="w-6 h-6" />   // 24px (default)
<Icon className="w-8 h-8" />   // 32px (large)
<Icon className="w-10 h-10" /> // 40px
<Icon className="w-12 h-12" /> // 48px (extra large)
```

## Common Patterns

### Icon with Text
```jsx
<button className="flex items-center gap-2">
  <Mail className="w-5 h-5" />
  <span>Email Us</span>
</button>
```

### Icon Button
```jsx
<button className="p-2 rounded-full hover:bg-gray-100">
  <Search className="w-6 h-6" />
</button>
```

### Animated Icon
```jsx
<div className="transition-transform hover:scale-110">
  <Heart className="w-6 h-6" />
</div>
```

### Icon with Badge
```jsx
<div className="relative">
  <Bell className="w-6 h-6" />
  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
    3
  </span>
</div>
```

## Dark Mode Icons

Icons automatically inherit text color, so they work with dark mode:

```jsx
// Will be dark in light mode, light in dark mode
<Icon className="text-gray-900 dark:text-white" />

// Accent color that works in both modes
<Icon className="text-teal-600 dark:text-teal-400" />
```

## Resources

- Browse all icons: https://lucide.dev
- Lucide React docs: https://lucide.dev/guide/packages/lucide-react
- GitHub: https://github.com/lucide-icons/lucide
