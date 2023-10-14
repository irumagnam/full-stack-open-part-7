import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs)

  // sort blogs by 'likes'
  const sortedBlogs = blogs
    .map((b) => b)
    .sort((b1, b2) => (b2.likes > b1.likes ? 1 : b2.likes < b1.likes ? -1 : 0))

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ width: '450px', mt: 2 }}
    >
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>created by</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedBlogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </TableCell>
              <TableCell>
                <Link to={`/users/${blog.user.id}`}>{blog.user.name}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BlogList
