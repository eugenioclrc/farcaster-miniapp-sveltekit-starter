<small>
    this is a auto generated file using llms, will curate it later.
</small>

# 🧪 Farcaster MiniApp Starter Kit

A modern, feature-rich starter kit for building Farcaster MiniApps using SvelteKit, TypeScript, and the official Farcaster MiniApp SDK. This demo showcases essential Farcaster integration features including authentication, casting, and frame interactions.

Most of the code is inspider on this links:

- [Post "sveltekit-mini-apps-frames"](https://blog.flashsoft.eu/sveltekit-mini-apps-frames-flashsoft-eu)
- [andrei0x309/frames.flashsoft.eu](https://github.com/andrei0x309/frames.flashsoft.eu)
- [farcasterxyz/miniapps](https://github.com/farcasterxyz/miniapps)
- [Farcaster MiniApp SDK](https://miniapps.farcaster.xyz/docs/getting-started)

## 📋 Description

This starter kit provides a solid foundation for developers looking to build MiniApps on the Farcaster protocol. It demonstrates best practices for integrating with Farcaster's ecosystem, including quick authentication, cast composition, and frame SDK integration. Built with modern web technologies, it offers a smooth development experience with hot reloading, type safety, and a beautiful UI.

## ✨ Features

- **🔑 Quick Authentication**: Seamless sign-in using Farcaster's quickAuth system
- **📝 Cast Composition**: Create and publish casts directly from the MiniApp
- **🖼️ Frame Integration**: Full support for Farcaster Frame v2 protocol
- **🎨 Modern UI**: Beautiful, responsive interface built with DaisyUI and Tailwind CSS
- **⚡ Type Safety**: Full TypeScript support with comprehensive type definitions
- **🔄 Real-time Updates**: Reactive state management with Svelte stores
- **🔧 Developer Experience**: Hot reloading, linting, and formatting out of the box
- **📱 Mobile Optimized**: Responsive design that works great on all devices
- **🔍 Context Inspection**: Built-in tools to inspect frame context and JWT tokens

## 🚀 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm
- A Farcaster account for testing

### Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd minicaster-svelte
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:

   ```env
   # Add your configuration variables here
   # Example:
   # FARCASTER_DEVELOPER_MNEMONIC=your_mnemonic_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see your MiniApp in action!

## 📖 Usage

### Quick Authentication

The app includes a streamlined authentication flow using Farcaster's quickAuth system:

1. Click the "Sign In" button in the Quick Auth section
2. Approve the authentication request in your Farcaster client
3. View your JWT token and decoded information
4. Use the "Sign Out" button to clear your session

### Cast Composition

Create and publish casts directly from the MiniApp:

1. Navigate to the Cast section
2. Click "Compose Cast" to create a new cast
3. The cast will be published with the demo text and embed
4. View the cast hash in the success message

### Frame Context Inspection

Explore the frame context and understand what data is available:

1. Toggle the "Client Context" section
2. View the raw frame context data
3. Inspect JWT tokens and their decoded contents

## 🛠️ Technologies Used

### Core Framework

- **SvelteKit 2.26+**: Full-stack web framework with SSR support
- **Svelte 5**: Latest version with runes and improved reactivity
- **TypeScript 5.8+**: Type-safe development experience

### Farcaster Integration

- **@farcaster/miniapp-sdk**: Official Farcaster MiniApp SDK
- **@farcaster/miniapp-wagmi-connector**: Wagmi integration for Farcaster
- **viem**: Ethereum library for blockchain interactions
- **wagmi**: React hooks for Ethereum

### UI & Styling

- **Tailwind CSS 4.1+**: Utility-first CSS framework
- **DaisyUI 5.0+**: Component library built on Tailwind
- **@tailwindcss/vite**: Vite plugin for Tailwind

### Development Tools

- **Vite 7.0+**: Fast build tool and dev server
- **ESLint**: Code linting and quality enforcement
- **Prettier**: Code formatting
- **svelte-check**: TypeScript checking for Svelte

### Utilities

- **jwt-decode**: JWT token decoding
- **@tanstack/react-query**: Data fetching and caching

## 🏗️ Project Structure

```
minicaster-svelte/
├── src/
│   ├── lib/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── QuickAuth.svelte
│   │   │   └── ComposeCastAction.svelte
│   │   ├── config/             # Configuration files
│   │   │   ├── farcaster.ts    # Farcaster-specific config
│   │   │   └── index.ts        # General app config
│   │   ├── frames/             # Frame-related code
│   │   │   ├── global/         # Global frame handlers
│   │   │   └── merkel/         # Merkle tree utilities
│   │   ├── stores/             # Svelte stores
│   │   │   └── global/         # Global state management
│   │   └── types/              # TypeScript type definitions
│   └── routes/                 # SvelteKit routes
│       ├── +layout.svelte      # Root layout
│       ├── +page.svelte        # Main page
│       └── components/         # Page-specific components
├── static/                     # Static assets
└── package.json               # Dependencies and scripts
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with svelte-check
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

### Key Components

#### QuickAuth.svelte

Handles Farcaster authentication using the quickAuth system. Provides sign-in/sign-out functionality and displays JWT token information.

#### ComposeCastAction.svelte

Demonstrates cast composition using the Farcaster SDK. Creates and publishes casts with custom text and embeds.

#### Frame Integration

The app includes comprehensive frame support with:

- Frame v2 protocol implementation
- Context inspection tools
- Webhook handling
- Trigger configuration

## 🤝 Contributing

We welcome contributions to improve this starter kit! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit them: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and formatting
- Add TypeScript types for new features
- Include tests for new functionality
- Update documentation for any API changes
- Ensure all linting checks pass

### Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow the project's coding standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Resources

- [Farcaster Documentation](https://docs.farcaster.xyz/)
- [Farcaster MiniApp SDK](https://github.com/farcasterxyz/miniapp-sdk)
- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Search existing discussions
3. Create a new issue with detailed information
4. Join our community discussions

---

**Happy building! 🚀**

Built with ❤️ for the Farcaster community.
