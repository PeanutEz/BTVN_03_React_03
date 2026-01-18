// Translation dictionary for useContext demo
export interface Translations {
  // Page title
  pageTitle: string;
  pageSubtitle: string;

  // Auth section
  authTitle: string;
  welcomeMessage: string;
  usernamePlaceholder: string;
  loginButton: string;
  logoutButton: string;

  // Menu
  menuTheme: string;
  menuLanguage: string;
  lightMode: string;
  darkMode: string;

  // Educational content
  contentTitle: string;
  whatIsTitle: string;
  whatIsContent: string;
  whyUsefulTitle: string;
  whyUsefulContent: string;
  whenToUseTitle: string;
  whenToUseContent: string;
  useCasesTitle: string;
  useCaseTheme: string;
  useCaseThemeDesc: string;
  useCaseLanguage: string;
  useCaseLanguageDesc: string;
  useCaseAuth: string;
  useCaseAuthDesc: string;
  useCaseSettings: string;
  useCaseSettingsDesc: string;

  // Additional info
  benefitsTitle: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
}

export const translations: Record<"en" | "vi", Translations> = {
  en: {
    pageTitle: "useContext Hook Demo",
    pageSubtitle: "Learn how to use React useContext for state management",

    authTitle: "Authentication Demo",
    welcomeMessage: "Welcome,",
    usernamePlaceholder: "Enter your username",
    loginButton: "Login",
    logoutButton: "Logout",

    menuTheme: "Theme",
    menuLanguage: "Language",
    lightMode: "Light",
    darkMode: "Dark",

    contentTitle: "Understanding useContext",
    whatIsTitle: "What is useContext?",
    whatIsContent:
      "useContext is a React Hook that lets you read and subscribe to context from your component. It provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered 'global' for a tree of React components.",
    whyUsefulTitle: "Why is useContext useful?",
    whyUsefulContent:
      "useContext solves the 'prop drilling' problem - when you need to pass data through many levels of components. Instead of passing props through intermediate components that don't need them, you can use context to make data available to any component in the tree that needs it. This makes your code cleaner and more maintainable.",
    whenToUseTitle: "When to use useContext?",
    whenToUseContent:
      "Use useContext when you have data that needs to be accessible by many components at different nesting levels. Common use cases include: theme preferences, user authentication status, language settings, or any global application state. However, if you're only passing props down one or two levels, regular props might be simpler.",
    useCasesTitle: "Real-World Use Cases",
    useCaseTheme: "Theme Management",
    useCaseThemeDesc:
      "Switch between light and dark modes across your entire application without prop drilling.",
    useCaseLanguage: "Internationalization",
    useCaseLanguageDesc:
      "Change the application language globally and update all text content instantly.",
    useCaseAuth: "User Authentication",
    useCaseAuthDesc:
      "Share user login state and information across all protected routes and components.",
    useCaseSettings: "User Preferences",
    useCaseSettingsDesc:
      "Store and access user settings like notifications, privacy options, or display preferences.",

    benefitsTitle: "Key Benefits",
    benefit1: "✓ Eliminates prop drilling",
    benefit2: "✓ Cleaner component architecture",
    benefit3: "✓ Easy to share global state",
    benefit4: "✓ Better code maintainability",
  },
  vi: {
    pageTitle: "Demo Hook useContext",
    pageSubtitle: "Học cách sử dụng React useContext để quản lý trạng thái",

    authTitle: "Demo Xác Thực",
    welcomeMessage: "Chào mừng,",
    usernamePlaceholder: "Nhập tên người dùng",
    loginButton: "Đăng nhập",
    logoutButton: "Đăng xuất",

    menuTheme: "Giao diện",
    menuLanguage: "Ngôn ngữ",
    lightMode: "Sáng",
    darkMode: "Tối",

    contentTitle: "Hiểu về useContext",
    whatIsTitle: "useContext là gì?",
    whatIsContent:
      "useContext là một React Hook cho phép bạn đọc và đăng ký context từ component của bạn. Nó cung cấp một cách để truyền dữ liệu qua cây component mà không cần phải truyền props xuống thủ công ở mỗi cấp độ. Context được thiết kế để chia sẻ dữ liệu có thể được coi là 'toàn cục' cho một cây các component React.",
    whyUsefulTitle: "Tại sao useContext hữu ích?",
    whyUsefulContent:
      "useContext giải quyết vấn đề 'prop drilling' - khi bạn cần truyền dữ liệu qua nhiều cấp độ component. Thay vì truyền props qua các component trung gian không cần chúng, bạn có thể sử dụng context để làm cho dữ liệu có sẵn cho bất kỳ component nào trong cây cần nó. Điều này làm cho code của bạn sạch hơn và dễ bảo trì hơn.",
    whenToUseTitle: "Khi nào nên dùng useContext?",
    whenToUseContent:
      "Sử dụng useContext khi bạn có dữ liệu cần được truy cập bởi nhiều component ở các cấp độ lồng nhau khác nhau. Các trường hợp sử dụng phổ biến bao gồm: tùy chọn giao diện, trạng thái xác thực người dùng, cài đặt ngôn ngữ, hoặc bất kỳ trạng thái ứng dụng toàn cục nào. Tuy nhiên, nếu bạn chỉ truyền props xuống một hoặc hai cấp độ, props thông thường có thể đơn giản hơn.",
    useCasesTitle: "Các Trường Hợp Sử Dụng Thực Tế",
    useCaseTheme: "Quản Lý Giao Diện",
    useCaseThemeDesc:
      "Chuyển đổi giữa chế độ sáng và tối trên toàn bộ ứng dụng mà không cần prop drilling.",
    useCaseLanguage: "Đa Ngôn Ngữ",
    useCaseLanguageDesc:
      "Thay đổi ngôn ngữ ứng dụng toàn cục và cập nhật tất cả nội dung văn bản ngay lập tức.",
    useCaseAuth: "Xác Thực Người Dùng",
    useCaseAuthDesc:
      "Chia sẻ trạng thái đăng nhập và thông tin người dùng trên tất cả các route và component được bảo vệ.",
    useCaseSettings: "Tùy Chọn Người Dùng",
    useCaseSettingsDesc:
      "Lưu trữ và truy cập cài đặt người dùng như thông báo, tùy chọn quyền riêng tư hoặc tùy chọn hiển thị.",

    benefitsTitle: "Lợi Ích Chính",
    benefit1: "✓ Loại bỏ prop drilling",
    benefit2: "✓ Kiến trúc component sạch hơn",
    benefit3: "✓ Dễ dàng chia sẻ trạng thái toàn cục",
    benefit4: "✓ Bảo trì code tốt hơn",
  },
};
