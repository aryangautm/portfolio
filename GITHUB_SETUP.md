# GitHub Contribution Graph Setup

## Quick Setup (3 Steps)

### Step 1: Update Your Username

Open `src/components/GitHubGraph.tsx` and change:

```typescript
const GITHUB_USERNAME = 'yourusername'; // Replace with YOUR GitHub username
```

### Step 2: Get GitHub Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Give it a name like "Portfolio Graph"
4. Select scope: **`read:user`** (this is all you need)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)

### Step 3: Add Token to Your Project

Create a `.env` file in your project root:

```bash
VITE_GITHUB_TOKEN=your_token_here
```

**Important:** 
- Never commit `.env` to git (it's already in `.gitignore`)
- For deployment, add this token to your hosting platform's environment variables

## Alternative: Public API (No Token Required)

If you don't want to use a token, you can use GitHub's public scraping API:

Update `src/components/GitHubGraph.tsx`:

```typescript
const fetchGitHubContributions = async (username: string) => {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
    );
    const result = await response.json();
    
    const contributions: { date: string; count: number }[] = [];
    
    result.contributions.forEach((day: any) => {
      contributions.push({
        date: day.date,
        count: day.count,
      });
    });
    
    return {
      contributions,
      total: result.total[result.total.length - 1],
    };
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return null;
  }
};
```

## For Deployment

### Vercel
1. Go to your project settings
2. Environment Variables
3. Add: `VITE_GITHUB_TOKEN` = `your_token`

### Netlify
1. Site settings → Build & deploy → Environment
2. Add: `VITE_GITHUB_TOKEN` = `your_token`

### Other Platforms
Add the environment variable through your hosting provider's dashboard.

## Troubleshooting

### Not showing contributions?
- Check your GitHub username is correct
- Make sure your token has `read:user` scope
- Check browser console for errors

### Getting rate limited?
- You need a token for higher rate limits
- Public API has ~60 requests/hour limit

### Token exposed?
- Immediately revoke it at: https://github.com/settings/tokens
- Generate a new one
- Never commit `.env` files to git

## Testing Locally

```bash
# With token
npm run dev

# Check if it's working
# Look at the browser console for any errors
```

Your real GitHub contribution graph should now appear! 🎉

