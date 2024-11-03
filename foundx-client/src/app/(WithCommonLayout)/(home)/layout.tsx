import React, { type ReactNode } from 'react';

const layout = ({children,recentPosts}: {children: React.ReactNode, recentPosts: ReactNode}) => {
    return (
        <div>
            {children}
            {recentPosts}
        </div>
    );
};

export default layout;