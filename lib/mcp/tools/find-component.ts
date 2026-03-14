interface ComponentEntry {
  component: string
  description: string
  keywords: string[]
  alternatives?: string[]
}

const COMPONENT_INDEX: ComponentEntry[] = [
  // Action
  { component: 'button', description: 'Clickable element that triggers an action', keywords: ['click', 'action', 'submit', 'trigger', 'cta', 'call to action', 'btn'] },
  { component: 'button-group', description: 'Group of related buttons displayed together', keywords: ['button group', 'multiple buttons', 'toolbar', 'segmented control'] },
  { component: 'toggle', description: 'Two-state button (on/off, active/inactive)', keywords: ['toggle', 'on off', 'active', 'pressed', 'two state'] },
  { component: 'toggle-group', description: 'Group of toggles for single or multiple selection', keywords: ['toggle group', 'radio toggle', 'multi select toggle', 'segmented'] },

  // Form
  { component: 'field', description: 'Form field wrapper with label, hint and error message', keywords: ['form field', 'label', 'input wrapper', 'field', 'form group'] },
  { component: 'input', description: 'Text input for single-line user input', keywords: ['text input', 'text field', 'type', 'enter text', 'input'] },
  { component: 'input-group', description: 'Input with prefix/suffix icons or text', keywords: ['input prefix', 'input suffix', 'icon input', 'adorned input', 'search input'] },
  { component: 'input-otp', description: 'One-time password input with segmented digits', keywords: ['otp', 'one time password', 'verification code', 'sms code', 'pin code', '6 digit'] },
  { component: 'textarea', description: 'Multi-line text input', keywords: ['textarea', 'multiline', 'long text', 'paragraph', 'message', 'description field'] },
  { component: 'checkbox', description: 'Binary choice control (checked/unchecked)', keywords: ['checkbox', 'check', 'tick', 'boolean', 'agree', 'accept', 'multiple choice'] },
  { component: 'radio-group', description: 'Single selection from a list of options', keywords: ['radio', 'radio button', 'single choice', 'one of', 'exclusive selection'] },
  { component: 'switch', description: 'Toggle switch for enabling/disabling a setting', keywords: ['switch', 'enable disable', 'settings toggle', 'on off switch', 'ios toggle'] },
  { component: 'slider', description: 'Range input for selecting a numeric value', keywords: ['slider', 'range', 'volume', 'price range', 'numeric range', 'drag'] },
  { component: 'select', description: 'Dropdown for selecting one option from a list', keywords: ['select', 'dropdown', 'pick one', 'choose', 'option list'] },
  { component: 'combobox', description: 'Searchable select with autocomplete', keywords: ['combobox', 'autocomplete', 'searchable select', 'typeahead', 'search and select'] },
  { component: 'date-picker', description: 'Calendar-based date selection input', keywords: ['date picker', 'calendar input', 'pick date', 'date field', 'datepicker'] },

  // Feedback
  { component: 'tooltip', description: 'Brief informational text shown on hover', keywords: ['tooltip', 'hover hint', 'describe icon', 'label on hover', 'info on hover', 'hint'] },
  { component: 'hover-card', description: 'Rich preview card shown on hover', keywords: ['hover card', 'preview on hover', 'rich tooltip', 'user preview', 'link preview'] },
  { component: 'popover', description: 'Floating panel triggered by a button click', keywords: ['popover', 'floating panel', 'click popup', 'filter popup', 'settings popup'] },
  { component: 'alert', description: 'Inline message for feedback or warnings', keywords: ['alert', 'banner', 'warning message', 'info message', 'error message', 'notification banner', 'feedback'] },
  { component: 'badge', description: 'Small label for status, count or category', keywords: ['badge', 'status', 'label', 'tag', 'pill', 'count', 'indicator', 'chip', 'new', 'unread'] },
  { component: 'kbd', description: 'Keyboard shortcut display', keywords: ['keyboard shortcut', 'keybinding', 'hotkey', 'kbd', 'key hint'] },
  { component: 'progress', description: 'Progress bar showing completion percentage', keywords: ['progress', 'progress bar', 'loading progress', 'completion', 'percentage'] },
  { component: 'skeleton', description: 'Placeholder loading state for content', keywords: ['skeleton', 'loading placeholder', 'shimmer', 'content loading', 'placeholder'] },
  { component: 'spinner', description: 'Circular loading indicator', keywords: ['spinner', 'loading', 'loading indicator', 'circular progress', 'busy'] },
  { component: 'sonner', description: 'Toast notification that appears briefly', keywords: ['toast', 'notification', 'snackbar', 'success message', 'error toast', 'brief message', 'sonner'] },
  { component: 'alert-dialog', description: 'Blocking modal requiring confirmation before a destructive action', keywords: ['confirm', 'confirmation', 'destructive', 'delete', 'are you sure', 'dangerous action', 'irreversible', 'prompt'], alternatives: ['dialog'] },

  // Layout
  { component: 'accordion', description: 'Expandable sections for FAQ or grouped content', keywords: ['accordion', 'expand collapse', 'faq', 'collapsible sections', 'show hide sections'] },
  { component: 'card', description: 'Container for grouped related content', keywords: ['card', 'panel', 'container', 'tile', 'box', 'content block'] },
  { component: 'collapsible', description: 'Single expandable/collapsible section', keywords: ['collapsible', 'expand collapse', 'show more', 'toggle section', 'read more'] },
  { component: 'command', description: 'Command palette for search and actions', keywords: ['command palette', 'spotlight', 'search commands', 'quick actions', 'cmd+k', 'command menu'] },
  { component: 'dialog', description: 'Modal dialog for focused content or forms', keywords: ['dialog', 'modal', 'popup', 'overlay', 'form in modal', 'lightbox'] },
  { component: 'drawer', description: 'Panel that slides in from the screen edge', keywords: ['drawer', 'slide panel', 'side panel', 'bottom sheet', 'slide in'] },
  { component: 'empty', description: 'Empty state placeholder for lists or pages', keywords: ['empty state', 'no results', 'no data', 'nothing here', 'zero state', 'placeholder state'] },
  { component: 'separator', description: 'Visual divider between sections', keywords: ['separator', 'divider', 'hr', 'horizontal rule', 'line divider'] },
  { component: 'sheet', description: 'Overlay panel anchored to a screen edge', keywords: ['sheet', 'side sheet', 'side drawer', 'right panel', 'flyout'] },

  // Text
  { component: 'label', description: 'Accessible label for form controls', keywords: ['label', 'form label', 'input label', 'field label'] },

  // Content
  { component: 'avatar', description: "User profile picture or initials fallback", keywords: ['avatar', 'profile picture', 'user image', 'initials', 'user icon'] },
  { component: 'calendar', description: 'Month-view calendar for date display or selection', keywords: ['calendar', 'month view', 'date display', 'date selection', 'schedule'] },
  { component: 'carousel', description: 'Horizontal scrollable item slideshow', keywords: ['carousel', 'slider', 'slideshow', 'swipe', 'gallery', 'image slider'] },
  { component: 'context-menu', description: 'Right-click contextual menu', keywords: ['context menu', 'right click', 'contextual actions', 'right click menu'] },

  // Navigation
  { component: 'breadcrumb', description: 'Navigation trail showing the current page location', keywords: ['breadcrumb', 'navigation path', 'current location', 'back navigation', 'page hierarchy'] },
  { component: 'dropdown-menu', description: 'Menu of actions revealed from a trigger button', keywords: ['dropdown menu', 'action menu', 'more actions', 'kebab menu', 'three dots menu', 'options menu'] },
  { component: 'menubar', description: 'Horizontal application-style menu bar', keywords: ['menubar', 'app menu', 'top menu', 'application menu', 'file edit view menu'] },
  { component: 'navigation-menu', description: 'Main site navigation with dropdown sections', keywords: ['navigation', 'nav menu', 'site navigation', 'mega menu', 'top navigation', 'header nav'] },
  { component: 'pagination', description: 'Page navigation controls for paginated data', keywords: ['pagination', 'pages', 'next previous', 'page numbers', 'pager'] },
  { component: 'tabs', description: 'Switch between sections of content via tab buttons', keywords: ['tabs', 'tab panel', 'switch sections', 'tabbed', 'tab navigation', 'tab bar'] },

  // Data
  { component: 'data-table', description: 'Feature-rich table with sorting, filtering and pagination', keywords: ['data table', 'sortable table', 'filterable table', 'grid', 'list view', 'table with search'] },
  { component: 'item', description: 'List row component for items in a list or menu', keywords: ['list item', 'row', 'list row', 'menu item', 'item row'] },
  { component: 'table', description: 'Basic HTML table with styled rows and columns', keywords: ['table', 'simple table', 'data grid', 'rows columns', 'html table'] },

  // Charts
  { component: 'chart-bar', description: 'Bar chart for comparing values across categories', keywords: ['bar chart', 'column chart', 'bar graph', 'compare values', 'histogram'] },
  { component: 'chart-line', description: 'Line chart for showing trends over time', keywords: ['line chart', 'trend', 'over time', 'line graph', 'time series'] },
  { component: 'chart-area', description: 'Area chart for showing volume over time', keywords: ['area chart', 'stacked area', 'filled line', 'volume over time'] },
  { component: 'chart-pie', description: 'Pie chart for showing proportions', keywords: ['pie chart', 'donut chart', 'proportions', 'percentage breakdown', 'share of'] },
  { component: 'chart-radar', description: 'Radar/spider chart for multivariate data', keywords: ['radar chart', 'spider chart', 'spider web', 'multivariate', 'skills chart'] },
  { component: 'chart-radial', description: 'Radial bar chart for circular progress display', keywords: ['radial chart', 'circular bar', 'radial progress', 'gauge chart'] },

  // Core
  { component: 'scroll-area', description: 'Custom styled scrollable container', keywords: ['scroll', 'scrollable', 'overflow', 'scroll container', 'custom scrollbar'] },
  { component: 'resizable', description: 'Panels that can be resized by dragging', keywords: ['resizable', 'split pane', 'resize panels', 'draggable split', 'panel resize'] },
  { component: 'aspect-ratio', description: 'Container that enforces a fixed aspect ratio', keywords: ['aspect ratio', '16:9', '4:3', 'fixed ratio', 'responsive image', 'video embed'] },
  { component: 'direction', description: 'Sets text direction (LTR/RTL) for a subtree', keywords: ['rtl', 'ltr', 'direction', 'right to left', 'arabic', 'hebrew', 'text direction'] },
]

export function findComponent(query: string): string {
  const q = query.toLowerCase()

  const scored = COMPONENT_INDEX.map(entry => {
    let score = 0
    for (const keyword of entry.keywords) {
      if (q.includes(keyword)) score += keyword.split(' ').length // longer matches score higher
    }
    return { entry, score }
  })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)

  if (scored.length === 0) {
    return `No component found for "${query}". Try describing the UI pattern (e.g., "confirmation modal", "status badge", "dropdown menu").`
  }

  const results = scored.map(({ entry }) => ({
    name: entry.component,
    description: entry.description,
    alternatives: entry.alternatives ?? [],
  }))

  return JSON.stringify({ query, results }, null, 2)
}
