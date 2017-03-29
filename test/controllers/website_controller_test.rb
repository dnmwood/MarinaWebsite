require 'test_helper'

class WebsiteControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get website_index_url
    assert_response :success
  end

  test "should get contact" do
    get website_contact_url
    assert_response :success
  end

end
