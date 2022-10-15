// Add Product Btn

const addProductBtn = document.querySelector('.add-product')
const addProductPlusIcon = document.querySelector('.add-product svg')
const addProductText = document.querySelector('.add-product h3')

addProductBtn.addEventListener('mouseover', () => {
    addProductPlusIcon.style.fill = 'white'
    addProductText.style.color = 'white'
})
addProductBtn.addEventListener('mouseout', () => {
    addProductPlusIcon.style.fill = ''
    addProductText.style.color = ''
})

// Open & Close Profile Menu

const profilePhoto = document.querySelector('.profile-photo')
const profileMenu = document.querySelector('.profile-menu')
const profileCircle = document.querySelector('.profile-circle')
const sidebar = document.querySelector('aside')
let sideMenuOpen = false

profilePhoto.addEventListener('click', () => {

    toggleProfileMenu()
    if(sideMenuOpen === true) {
        sidebar.style.animation = 'hideMenuSmooth 800ms ease-in'
    }
})

function toggleProfileMenu() {
    profileMenu.classList.toggle('active-menu')
    profileCircle.classList.toggle('active')
}

// Show & Hide Sidebar on mobile

const menuBurgerBtn = document.querySelector('.menu-btn')
const menuCloseBtn = document.querySelector('.close-icon')

if("ontouchstart" in document.documentElement) {
    menuBurgerBtn.addEventListener('touchstart', () => {
        openSideMenu()
    })
    menuCloseBtn.addEventListener('touchstart', () => {
        hideSideMenu()
    })
} else {
    menuBurgerBtn.addEventListener('click', () => {
        openSideMenu()
    })
    menuCloseBtn.addEventListener('click', () => {
        hideSideMenu()
    })
}

function openSideMenu() {
    sidebar.style.animation = 'slideMenuInViewport 470ms ease forwards'
    sideMenuOpen = true

    if(profileMenu.classList.contains('active-menu')) {
        toggleProfileMenu()
    }
}

function hideSideMenu() {
    sidebar.style.animation = 'hideMenuSmooth 770ms ease-in'
    sideMenuOpen = false
}

// Add Product Popup

const addProductPopup = document.querySelector('.addproduct-popup')
const addProductPopupForm = document.querySelector('.form-container')
const addProductSuccessInfo = document.querySelector('.addproduct-success-info')
const productPopupCloseBtn = document.querySelector('.popup-close-btn')
const categoryAddProduct = document.querySelector('.category-add-product')
const darkOverlay = document.querySelector('.dark-overlay')
const turnDevicePopup = document.querySelector('.turn-device-popup')
const closeDevicePopupBtn = document.querySelector('.close-btn-device')

addProductPopupForm.addEventListener('submit', e => {
    e.preventDefault()
    closeAddProductPopup()

    if(window.matchMedia('(max-width: 768px)').matches) {
        addProductSuccessInfo.style.right = '20px'
    } else {
        addProductSuccessInfo.style.right = '30px'
    }
    setTimeout(() => {
        addProductSuccessInfo.style.right = '-280px'
    }, 3500)
})

addProductBtn.addEventListener('click', () => {
    openSuitablePopup()
})
categoryAddProduct.addEventListener('click', () => {
    openSuitablePopup()
})
function openSuitablePopup() {
    if(window.innerHeight < 680 && window.innerHeight < window.innerWidth && "ontouchstart" in document.documentElement) {
        showTurnDevicePopup()
    } else {
        showAddProductPopup()
    }
}

productPopupCloseBtn.addEventListener('click', () => {
    closeAddProductPopup()
})
closeDevicePopupBtn.addEventListener('click', () => {
    closeTurnDevicePopup()
})
darkOverlay.addEventListener('click', () => {
    closeAddProductPopup()
    closeTurnDevicePopup()
})

function showAddProductPopup() {
    addProductPopup.style.display = 'block'
    darkOverlay.style.display = 'block'
}
function closeAddProductPopup() {
    addProductPopup.style.display = 'none'
    darkOverlay.style.display = 'none'
}

function showTurnDevicePopup() {
    turnDevicePopup.style.display = 'flex'
    darkOverlay.style.display = 'block'
}
function closeTurnDevicePopup() {
    turnDevicePopup.style.display = 'none'
    darkOverlay.style.display = 'none'
}

// Popup textarea open/close

const textareaLabelBox = addProductPopup.querySelector('.textarea-label-box')
const textareaPlusIcon = addProductPopup.querySelector('.plus-icon')
const textareaMinusIcon = addProductPopup.querySelector('.minus-icon')
const textarea = addProductPopup.querySelector('textarea')
textareaClosed = true

textareaLabelBox.addEventListener('mouseover', () => {
    textareaPlusIcon.style.fill = 'var(--success-clr)'
    textareaMinusIcon.style.fill = 'var(--success-clr)'
})

textareaLabelBox.addEventListener('mouseout', () => {
    if(body.classList.contains('dark-theme')) {
        textareaPlusIcon.style.fill = 'white'
        textareaMinusIcon.style.fill = 'white'
    } else {
        textareaPlusIcon.style.fill = 'black'
        textareaMinusIcon.style.fill = 'black'
    }  
})

textareaLabelBox.addEventListener('click', () => {
    if(textareaClosed === true) {
        textarea.style.display = 'block'
        textareaLabelBox.style.marginBottom = '0'
        textareaPlusIcon.style.display = 'none'
        textareaMinusIcon.style.display = 'block'
        textareaClosed = false

    } else {
        textarea.style.display = 'none'
        textareaLabelBox.style.marginBottom = '1.5rem'
        textareaPlusIcon.style.display = 'block'
        textareaMinusIcon.style.display = 'none'
        textareaClosed = true
    }
})

// Toggle Theme Color Btn

const toggleThemeBtn = document.querySelector('.toggle-theme-btn')
const activeCategory = document.querySelector('.category.active')
const brandLogoIMG = document.querySelector('.brand-logo-img')
const body = document.querySelector('body')
const datePicker = document.querySelector('.date-box')
const datePickerInput = document.querySelector('[type="date"]')
const datePickerIcon = document.querySelector('.date-box svg')

toggleThemeBtn.addEventListener('click', () => {

    // dark mode switch
    document.body.classList.toggle('dark-theme')
    toggleThemeBtn.querySelector('span:nth-child(1)').classList.toggle('toggle-active')
    toggleThemeBtn.querySelector('span:nth-child(2)').classList.toggle('toggle-active')   
    
    // change category link color
    const sidebarLinks = document.querySelectorAll('.sidebar-nav .category:not(.active)')
    sidebarLinks.forEach(link => {
        link.classList.toggle('dark-mode')
    })

    // change category bg color
    activeCategory.classList.toggle('change-clr')

    // remove weird transition effect on border
    preventTransitionEffect(10)

    // change things in dark/light mode
    if(body.classList.contains('dark-theme')) {
        brandLogoIMG.setAttribute('src', 'img/1A-Logo-white.png')
        brandLogoIMG.style.width = '39px'
        datePicker.style.background = 'var(--white-clr)'
        datePickerIcon.style.fill = '#7d8da1'
        closeDevicePopupBtn.setAttribute('src', 'img/close-icon-black.svg')
        productPopupCloseBtn.setAttribute('src', 'img/close-icon-black.svg')
        textareaPlusIcon.style.fill = 'white'
        textareaMinusIcon.style.fill = 'white'
        menuBurgerBtn.children[0].style.fill = '#ffffff'
        profileMenu.style.boxShadow = '0 1.3rem 2.35rem rgba(0 0 0 / 36%)'
        menuCloseBtn.setAttribute('src', 'img/close-icon-white.svg')

    } else {
        brandLogoIMG.setAttribute('src', 'img/1a-Logo-black.png')
        brandLogoIMG.style.width = '46px'
        datePicker.style.background = ''
        datePickerIcon.style.fill = '#363949'
        closeDevicePopupBtn.setAttribute('src', 'img/close-icon-white.svg')
        productPopupCloseBtn.setAttribute('src', 'img/close-icon-white.svg')
        textareaPlusIcon.style.fill = 'black'
        textareaMinusIcon.style.fill = 'black'
        menuBurgerBtn.children[0].style.fill = '#000000'
        profileMenu.style.boxShadow = '0 1.1rem 1.8rem rgba(0 0 0 / 18%)'
        menuCloseBtn.setAttribute('src', 'img/close-icon-black.svg')
    }
})

// Date Picker Placeholder

datePickerInput.addEventListener('click', () => {
        datePickerInput.classList.remove('placeholder')
        datePickerInput.style.color = 'var(--date-clr)'
})

if("ontouchstart" in document.documentElement) {
    body.addEventListener('touchmove', e => {
        addPlaceholder(e)
    })
    body.addEventListener('touchstart', e => {
        addPlaceholder(e)
    })
} else {
    body.addEventListener('click', e => {
        addPlaceholder(e)
    })
}

function addPlaceholder(e) {
    if(datePickerInput.value === '' && e.target !== datePickerInput) {
        if(isFirefox === false) { datePickerInput.style.color = 'transparent' }
        datePickerInput.classList.add('placeholder')
    }
}

// DatePicker Firefox

let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1

if(isFirefox === true){
    datePickerInput.style.color = 'var(--date-clr)'
}

// Sidebar navigation hover

const navCategories = document.querySelectorAll('.sidebar-nav .category')

navCategories.forEach(navCategory => {

    navCategory.addEventListener('mouseover', e => {
        const navIcon = navCategory.querySelector('svg')
        if(navCategory.classList.contains('dark-mode')) {
            navIcon.style.fill = 'white'
        } else {
            navIcon.style.fill = 'var(--primary-clr)'
        }
    })

    navCategory.addEventListener('mouseout', e => {
        const navIcon = navCategory.querySelector('svg')
        navIcon.style.fill = ''
    })
})

// Fill orders in Table

Orders.forEach((order,index) => {
    const trContent = ` 
                        <td class="table-data hover-active">${order.productName}</td>
                        <td class="table-data">${order.productNumber}</td>
                        <td class="table-data"><span class="payment-status">${order.paymentStatus}</span></td>
                        <td class="table-data">${order.shipping}</td>
                        <td class="table-data"><a href="#">Details</a></td>
                       `
    const tr = document.createElement('tr')
    tr.innerHTML = trContent
    document.querySelector('table tbody').appendChild(tr)

    // Table Search-Filter Function
 
    const searchInput = document.querySelector('[data-search-input]')
 
    searchInput.addEventListener('input', e => {
 
        // filter with tableData in tr
        const tableRowData = tr.querySelectorAll('.table-data')
        let searchSuccess = false
 
        tableRowData.forEach(tableData => {
            if(searchSuccess === true) return
 
            if(tableData.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                tableData.parentElement.style.display = 'table-row'
                tableData.parentElement.classList.add('visible-row')
                tableData.parentElement.classList.add('filtered')
                tableData.parentElement.classList.remove('hidden-row')
                searchSuccess = true

            } else {
                tableData.parentElement.style.display = 'none'
                tableData.parentElement.classList.add('hidden-row')
                tableData.parentElement.classList.remove('filtered')
                tableData.parentElement.classList.remove('visible-row')
                searchSuccess = false
            }
        })

        if(index === Orders.length - 1) { /* only last iteration */

            // update border bottom
            const allVisibleRows = Array.from(document.querySelectorAll('.visible-row'))
            if(allVisibleRows.length >= 1) {
                const allVisibleRowsExceptLast = allVisibleRows.slice(0, -1)
                allVisibleRowsExceptLast.forEach(row => {
                    row.classList.remove('remove-border')
                })
                allVisibleRows[allVisibleRows.length - 1].classList.add('remove-border')
            }

            // remove weird transition effect on border
            preventTransitionEffect(10)
        }
    })

    // Set Payment Status Color

    const paymentStatus = tr.querySelector('.payment-status')

    if(paymentStatus.innerText === 'Paid') {
        paymentStatus.classList.add('paid')
    } else if(paymentStatus.innerText === 'Unpaid') {
        paymentStatus.classList.add('unpaid')
    } else if(paymentStatus.innerText === 'Refunded') {
        paymentStatus.classList.add('refunded')
    } 

    // remove border-bottom on fifth row

    const tbody = document.querySelector('.table-body')

    if(tbody.children.length === 5) {
        tr.classList.add('remove-border')
    }

    // define visible, hidden, filtered rows

    if(tbody.children.length <= 5) {
        tr.classList.add('visible-row')
    } else {
        tr.style.opacity = '0'
        tr.style.transform = 'translateX(10%)'
        tr.classList.add('hidden-row')
    }
    tr.classList.add('filtered')
})

// Table data hover effect only on big screens

const allFirstTableData = Array.from(document.querySelectorAll('.orders-table td:nth-child(1)'))

if(window.matchMedia('(max-width: 395px)').matches) {
    allFirstTableData.forEach(firstTableData => {
        firstTableData.classList.remove('hover-active')
    })
}

// Set transition value delayed to prevent weird FX

setTimeout(() => {
    allFirstTableData.forEach(firstTableData => {
        firstTableData.style.transition = '210ms ease-in'
    })
}, 300)

// open & close recent orders table smooth

const tableContainer = document.querySelector('.orders-table-container')
const tableBody = tableContainer.querySelector('.table-body')
const showMoreBtn = document.querySelector('.show-more-btn')
let tableClosed = true

showMoreBtn.addEventListener('click', e => {
    
    if(tableClosed === true) { /* open table */

        preventHoverEffect()

        // open Table
        if(window.matchMedia('(max-width: 425px)').matches) {
            tableContainer.style.height = '672px'
        } else {
            tableContainer.style.height = '600px'
        }

        const hiddenTableRows = tableBody.querySelectorAll('.hidden-row')

        // fly in rows
        hiddenTableRows.forEach((row, index) => {
            setTimeout(() => {
                row.style.opacity = '1'
                row.style.transform = 'translateX(0)'
            }, index * 120)
        })

        // update classes
        hiddenTableRows.forEach(row => {
            if(window.getComputedStyle(row).display === 'table-row') {
                row.classList.remove('hidden-row')
                row.classList.add('visible-row')
            }
        })

        updateBorderBottom()

        // update body height
        if(window.matchMedia('(max-width: 1220px)').matches) {
            body.style.height = 'calc(100vh + 800px)'
        } else {
            body.style.height = 'calc(100vh + 270px)'
        }

        showMoreBtn.innerText = 'Show Less'
        tableClosed = false

    } else { /* close table */

        preventHoverEffect()
        tableContainer.style.transition = 'height 1180ms, box-shadow 300ms ease'

        // close Table
        if(window.matchMedia('(max-width: 425px)').matches) {
            tableContainer.style.height = '370px'
        } else {
            tableContainer.style.height = '330px'
        }

        // prepare variables
        const rowsToHide = Array.from(tableBody.querySelectorAll('.visible-row'))
        const rowsToHideFiltered = rowsToHide.filter((row,index) => {
            return index > 4
        })
        const reversedRowsToHide = [...rowsToHideFiltered].reverse()

        // update classes & transition
        reversedRowsToHide.forEach(row => {
            row.classList.remove('visible-row')
            row.classList.add('hidden-row')
            row.style.transition = '700ms ease'
        })

        // fly out rows
        reversedRowsToHide.forEach((row, index) => {
            setTimeout(() => {
                row.style.opacity = '0'
                row.style.transform = 'translateX(10%)'
            }, index * 120)
        })

        // update border-bottom
        const allVisibleRows = Array.from(tableBody.querySelectorAll('.visible-row'))
        const allVisibleRowsExceptLast = allVisibleRows.slice(0, -1)
        allVisibleRowsExceptLast.forEach(row => {
            row.classList.remove('remove-border')
        })

        // remove last border-bottom
        if(rowsToHide.length > 7) {
            setTimeout(() => {
                allVisibleRows[allVisibleRows.length - 1].classList.add('remove-border')
            }, 480)
        } else {
                allVisibleRows[allVisibleRows.length - 1].classList.add('remove-border')
        }
        
        showMoreBtn.innerText = 'Show More'
        tableClosed = true
    }
})

// prevent hover effect during opening

function preventHoverEffect() {

    const allProductNames = document.querySelectorAll('.orders-table td:nth-child(1)')
    allProductNames.forEach(productName => {
        productName.classList.remove('hover-active')
        productName.style.transition = 'none'
        setTimeout(() => {
            productName.classList.add('hover-active')
            productName.style.transition = '210ms ease-in'
        }, 1180)
    })
}

// show all orders when user clicks searchbar

const searchInput = document.querySelector('[data-search-input]')

searchInput.addEventListener('mousedown', () => {

        tableContainer.style.transition = 'height 0ms, box-shadow 300ms ease'

        // open table
        if(window.matchMedia('(max-width: 425px)').matches) {
            tableContainer.style.height = '672px'
        } else {
            tableContainer.style.height = '600px'
        }

        // show filtered rows & update classes
        if(tableClosed === true) {
            const hiddenTableRows = tableBody.querySelectorAll('.hidden-row')    

            hiddenTableRows.forEach(row => {
                if(row.classList.contains('filtered')) {
                    row.style.transition = 'none'
                    row.style.opacity = '1'
                    row.style.transform = 'translateX(0)'
                    row.classList.remove('hidden-row')
                    row.classList.add('visible-row')
                }
            })
        }

        // change body height
        if(window.matchMedia('(max-width: 1220px)').matches) {
            body.style.height = 'calc(100vh + 800px)'
        } else {
            body.style.height = 'calc(100vh + 270px)'
        }

        // update border-bottom
        updateBorderBottom()

        // prevent weird transition effect
        preventTransitionEffect(10)

        showMoreBtn.innerText = 'Show Less'
        tableClosed = false
})

// Function: Update BorderBottom

function updateBorderBottom() {
    const allVisibleRows = Array.from(document.querySelectorAll('.visible-row'))
    const allVisibleRowsExceptLast = allVisibleRows.slice(0, -1)
    allVisibleRowsExceptLast.forEach(row => {
        row.classList.remove('remove-border')
    })
    allVisibleRows[allVisibleRows.length - 1].classList.add('remove-border')
}

// Function: Prevent Weird Transition Effect

function preventTransitionEffect(ms) {
    const allFirstTableData = document.querySelectorAll('.orders-table td:nth-child(1)')
    allFirstTableData.forEach(firstTableData => {
        firstTableData.style.transition = 'none'
        setTimeout(() => {
            firstTableData.style.transition = '210ms ease-in'
        }, ms)
    })
}

// Sidebar aTags prevent pagejump onclick

const sidebarNavLinks = sidebar.querySelectorAll('.sidebar-nav a')

sidebarNavLinks.forEach(aTag => {
    aTag.addEventListener('click', e => {
        e.preventDefault()
    })
})

// fix & Update table data height - Firefox td height Bug

if(isFirefox === true && "ontouchstart" in document.documentElement) {
    const allTableData = document.querySelectorAll('.orders-table td')
    allTableData.forEach(td => {
        td.style.height = '61px'
    })
}